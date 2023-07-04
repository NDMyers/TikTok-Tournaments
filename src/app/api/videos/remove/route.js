import { fetchRedis } from "@/app/helpers/redis"
import { db } from "@/lib/db"

export async function POST(req) {
    try {
        const body = await req.json()

        const videoToRemoveId = body.url.split('https://www.tiktok.com/embed/')[1]
        
        const videoToRemove = {
            url: body.url,
            nickname: body.nickname,
            user: body.user,
            numLiked: body.numLiked
        }

        await db.del(videoToRemoveId)

        // Check if key in videos set
        const isInVideos = await db.sismember( 'videos', videoToRemoveId )
        if( isInVideos ) {
            await db.srem('videos', videoToRemoveId)
        }
        
        // Check if video is in 'recent' or 'videos' set
        // If so, then delete from them b4 deleting key
        // const isInVideos = await db.sismember('videos',videoId)
        // // const isInRecent = await db.sismember('recent',videoId)
        // if( isInVideos ) {
        //     db.srem('videos',videoId)
        // }
        // if( isInRecent ) {
        //     db.srem('recent',videoId)
        //     db.sadd('recent','')
        // }

        // // Finally, delete key
        // db.del(videoId)
        console.log(videoId)
        

        return new Response('OK')
    } catch (error) {
        return new Response('Error Deleting Video', { status: 400 })
    }
}