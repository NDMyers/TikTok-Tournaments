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
    const recentId = await fetchRedis('get', 'recent')

    console.log(recentId)

    // console.log(JSON.parse(recentId[0]).url)
    // console.log(JSON.parse(recentId[0]).url)

    // const videoInfo = db.get(JSON.parse(recentId[0]).url)

    return JSON.parse(recentId)
}

export const getAllVideos = async () => {
    // const videos = await db.keys('*')
    // const videosLength = videos.length
    // const videoIds = videos.splice(0,videosLength-4)

    // const keyValues = new Array()
    // // For all keys not 'recent' and 'videos' and 'examples', get their values
    // for( let i = 0; i < videosLength-4; i++ ) {
    //     keyValues.push(await db.get(videoIds[i]))
    // }

    // // don't want to return keys with user:example (example videos, not user created ones)
    // for( let i = 0; i < keyValues.length; i++ ) {
    //     if( keyValues[i].user === 'example' ) {
    //         const toRemove = keyValues.splice(i,i)
    //     }
    // }

    // console.log(keyValues[0].url)

    const videoSet = await db.smembers('videos')
    const keyValues = new Array()

    for( let i = 0; i < videoSet.length; i++ ) {
        keyValues.push(await db.get(videoSet[i]))
    }

    return keyValues
}

export const getExampleVideos = async () => {
    const exampleSet = await db.smembers('examples')
    const keyValues = new Array()

    for( let i = 0; i < exampleSet.length; i++ ) {
        keyValues.push(await db.get(exampleSet[i]))
    }

    return keyValues
}