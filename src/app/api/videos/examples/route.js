import { fetchRedis } from "@/app/helpers/redis"
import { db } from "@/lib/db"

export async function POST(req) {
    try {
        const body = await req.json()

        console.log(`add route.js body value: ${body.url}`)

        const id = body.url.split('https://www.tiktok.com/embed/')[1]

        const newVideo = {
            url: body.url,
            nickname: body.nickname, 
            user: body.user,
            numLiked: body.numLiked
        }

        db.set(id, newVideo)
        db.sadd('examples', id)

        return new Response('OK')
    } catch (error) {
        return new Response('Error Deleting Video', { status: 400 })
    }
}