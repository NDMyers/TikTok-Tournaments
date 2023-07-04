'use client'

// import { fetchRedisClient } from "@/app/helpers/clientredis"
// import { addNewTikTok } from "@/app/helpers/tiktok"
// import { Redis } from "@upstash/redis/nodejs"
import Link from "next/link"
import axios, { AxiosError } from 'axios'
import { addNewTikTok } from "@/app/helpers/tiktok"
import { Router } from "lucide-react"
import { useRouter } from "next/navigation"

const HomePageButtons = () => {

    const router = useRouter()

    const addVideo = async () => {
        try {
            const user = document.getElementById('userInput').value
            const url = document.getElementById('urlInput').value
            const nickname = document.getElementById('nicknameInput').value

            if( user === '' || url === '' || nickname === '' ) {
                alert("Please fill out all forms before adding video")
            }

            // Successfully can add video, now go to video preview
            else {
                const embedUrl = addNewTikTok(url)
                await axios.post('/api/videos/preview', {
                    embedUrl,
                    user,
                    nickname,
                })
                
                window.location.href = '/preview'
            }
          
        } catch (error) {
            console.log(error)
        }
    }

    const toVideos = () => {
        router.push(`/videos?example=${false}`)
    }

    return (

        <div className='flex flex-row md:w-1/2 w-full justify-evenly pt-10'>
            <div className='flex w-auto'>
                <button
                    onClick={addVideo}
                    className='bg-rose-500 sm:px-10 sm:py-4 rounded-2xl px-8 py-1 hover:ring hover:ring-cyan-400'
                >
                    <p className='text-white'>Add Video</p>
                </button>
            </div>
            <div className='flex w-auto'>
                <button
                    onClick={toVideos}
                    className='bg-rose-500 sm:px-10 sm:py-4 rounded-2xl px-8 py-5 hover:ring hover:ring-cyan-400'
                >
                    <p className='text-white'>My Videos</p>
                </button>
            </div>
        </div>

    )
}

export default HomePageButtons
