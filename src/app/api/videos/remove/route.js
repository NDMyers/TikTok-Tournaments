import { fetchRedis } from "@/app/helpers/redis"
import { db } from "@/lib/db"

export async function POST(req) {
    try {
        const body = await req.json()
        const videoId = body.videoId
        
        // Check if video is in 'recent' or 'videos' set
        // If so, then delete from them b4 deleting key
        const isInVideos = await db.sismember('videos',videoId)
        // const isInRecent = await db.sismember('recent',videoId)
        if( isInVideos ) {
            db.srem('videos',videoId)
        }
        if( isInRecent ) {
            db.srem('recent',videoId)
            db.sadd('recent','')
        }

        // Finally, delete key
        db.del(videoId)

        return new Response('OK')
    } catch (error) {
        return new Response('Error Deleting Video', { status: 400 })
    }
}