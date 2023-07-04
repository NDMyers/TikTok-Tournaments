import { fetchRedis } from "@/app/helpers/redis"
import { db } from "@/lib/db"

export async function POST(req) {
    try {
        const body = await req.json()

        const id = body.url.split('https://www.tiktok.com/embed/')[1]

        db.set(id, {
            url: body.url,
            user: body.user,
            nickname: body.nickname,
            numLiked: (body.numLiked+1)
        })

        return new Response('OK')
    } catch (error) {
        return new Response('Error Deleting Video', { status: 400 })
    }
}