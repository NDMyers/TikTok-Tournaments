'use client'

import { exampleVideos } from "@/app/helpers/examples"
import axios from "axios"
import { useRouter } from "next/navigation"

const HomePageExampleButton = ({}) => {

    const router = useRouter()

    const playExamples = async ({}) => {
        const exampleVideosArray = exampleVideos()
        try {
            for( let i = 0; i < 2; i++ ) {
                    axios.post('/api/videos/examples', {
                        url: exampleVideosArray[i].url,
                        nickname: exampleVideosArray[i].nickname,
                        user: exampleVideosArray[i].user,
                        numLiked: exampleVideosArray[i].numLiked
                })
            }
        } catch (error) {
            return new Response('Error generating example run', { status: 400 })
        } finally {
            router.push(`/videos?example=${true}`)
        }
    }

    return (
        <a 
            className='text-white text-sm text-center hover:cursor-pointer w-28 flex-1 hover:text-cyan-400 underline' 
            onClick={playExamples}>
            or try example!
        </a>
    )
}

export default HomePageExampleButton