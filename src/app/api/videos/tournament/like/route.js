import { fetchRedis } from "@/app/helpers/redis"
import { db } from "@/lib/db"

export async function POST(req) {
    try {
        const body = await req.json()

        const likedId = body.liked.url.split('https://www.tiktok.com/embed/')[1]
        const dislikedId = body.disliked.url.split('https://www.tiktok.com/embed/')[1]
        const isExampleRaw = body.isExample
        const isExample = isExampleRaw === 'true' ? true : false

        console.log(isExample)

        // Set winner to better, keep winner in set
        db.set(likedId, {
            url: body.liked.url,
            user: body.liked.user,
            nickname: body.liked.nickname,
            numLiked: (body.liked.numLiked+1),
            better: true,
            worse: false
        })

        // Pop loser from set
        // db.set(dislikedId, {
        //     url: body.disliked.url,
        //     user: body.disliked.user,
        //     nickname: body.disliked.nickname,
        //     numLiked: body.disliked.numLiked,
        //     better: false,
        //     worse: true
        // })
        if( isExample ) 
            db.srem('examples', dislikedId)
        else
            db.srem('videos', dislikedId)

        return new Response('OK')
    } catch (error) {
        return new Response('Error Deleting Video', { status: 400 })
    }
}