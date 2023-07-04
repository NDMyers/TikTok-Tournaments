import CompareSection from "@/components/CompareSection"
import { db } from "@/lib/db"

const page = async ({ searchParams }) => {

    const isExample = searchParams.example

    let video1Id = isExample ? await db.srandmember('examples') : await db.srandmember('videos')
    let video2Id = isExample ? await db.srandmember('examples') : await db.srandmember('videos')

    // Make sure the two videos aren't the same (check if example or not, then check if video1 === video2)
    // TODO
    // isExample && video1Id === video2Id ? video1Id = await db.srandmember('examples')
    while( isExample && (video1Id === video2Id) ) {
        video1Id = await db.srandmember('examples')
    }

    // Then get video information by key
    const video1 = await db.get(video1Id)
    const video2 = await db.get(video2Id)
    
    return (

        <div>
            <CompareSection isExample={isExample} video1={video1} video2={video2}/>
        </div>

    )

}

export default page