import CompareSection from "@/components/CompareSection"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

const page = async ({ searchParams }) => {

    const isExampleRaw = searchParams.example
    const isExample = isExampleRaw === 'true' ? true : false

    const dbSet = isExample ? 'examples' : 'videos'

    let videosLengthRaw = await db.smembers(dbSet)
    let videosLength = videosLengthRaw.length

    if( videosLength <= 1 ) {
        let winnerId = await db.srandmember(dbSet)
        await db.set('gametype', dbSet)
        redirect('/winner')
    }
    else {
        let videoIds = await db.srandmember(dbSet, 2)

        // Then get video information by key
        const video1 = await db.get(videoIds[0])
        const video2 = await db.get(videoIds[1])

        return (
            <div>
                <CompareSection isExample={isExampleRaw} video1={video1} video2={video2}/>
            </div>
        )
    }

}

export default page