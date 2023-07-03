import { db } from "@/lib/db"
import { fetchRedis } from "./redis"
import { json } from "stream/consumers"

const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL
const authToken = process.env.UPSTASH_REDIS_REST_TOKEN


export const updateRecent = async ( videoNumber ) => {
    const rawResult = await fetchRedis('get', videoNumber)
    const result = JSON.parse(rawResult)

    // db.set(videoNumber, {
    //     url: result.url,
    //     numLiked: result.numLiked
    // })

    db.spop('recent')
    db.sadd('recent', videoNumber)

}

export const getMostRecent = async () => {
    const recentId = await fetchRedis('smembers', 'recent')

    console.log(JSON.parse(recentId[0]).url)

    // const videoInfo = db.get(JSON.parse(recentId[0]).url)

    return JSON.parse(recentId[0])
}

export const getAllVideos = async () => {
    const videos = await db.keys('*')
    const videosLength = videos.length
    const videoIds = videos.splice(0,videosLength-2)

    const keyValues = new Array()
    // For all keys not 'recent' and 'videos', get their values
    for( let i = 0; i < videosLength-2; i++ ) {
        keyValues.push(await db.get(videoIds[i]))
    }

    // console.log(keyValues[0].url)
    return keyValues
}