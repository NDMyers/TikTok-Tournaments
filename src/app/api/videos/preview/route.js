import { fetchRedis } from "@/app/helpers/redis"
import { db } from "@/lib/db"

export async function POST(req) {
    try {
        const body = await req.json()
        const newVideo = body.embedUrl

        // Make new id from url that gets rid of the non unique part of url
        const newId = body.embedUrl.split('https://www.tiktok.com/embed/')[1]

        db.sadd('recent', {
            url:body.embedUrl,
            user: body.user,
            nickname: body.nickname,
            numLiked: 0
        })
        return new Response('OK')

        // // Check if there are any videos added yet
        // const videosSetExists = await fetchRedis('exists', 'videos')

        // if( !videosSetExists ) {
        //     db.sadd('videos', newId)
        //     db.set(newId, {
        //         url: newVideo,
        //         nickname: body.nickname,
        //         user: body.user,
        //         numLiked: 0
        //     })
        //     db.sadd('recent', newId)
        //     return new Response('OK')
        // }

        // if( videosSetExists ) {
        //     const numVideosRaw = await fetchRedis('smembers', 'videos')
        //     const numVideos = numVideosRaw.length
        //     db.set(newId, {
        //         url: newVideo,
        //         nickname: body.nickname,
        //         user: body.user,
        //         numLiked: 0 
        //     })
        //     db.spop('recent')
        //     db.sadd('recent', newId)
        //     db.sadd('videos', newId)

        //     return new Response('OK')
        // }
    
    } catch (error) {
        return new Response( 'Invalid request', { status : 400 })
    }
}