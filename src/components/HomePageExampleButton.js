'use client'

import { exampleVideos } from "@/app/helpers/examples"
import axios from "axios"
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const HomePageExampleButton = ({}) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const playExamples = async ({}) => {
        setIsLoading(true)
        const exampleVideosArray = exampleVideos()
        try {
            for( let i = 0; i < 8; i++ ) {
                    await axios.post('/api/videos/examples', {
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
            setIsLoading(false)
        }
    }

    return (
        <div>
            {isLoading ? 
            <Loader2Icon className='animate-spin text-white'/> : 
            (<a 
                className='text-white text-sm text-center hover:cursor-pointer w-28 flex-1 hover:text-cyan-400 underline' 
                onClick={playExamples}>
                or try example!
            </a>
            )}
        </div>
    )
}

export default HomePageExampleButton