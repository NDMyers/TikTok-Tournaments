'use client'

import axios from "axios"
import { CheckIcon, Heart, RefreshCwIcon, X } from "lucide-react"
import { Boogaloo } from "next/font/google"
import { useRouter } from "next/navigation"
import { useState } from "react"

const boogalooFont = Boogaloo({ weight: '400', subsets: ['latin'] })

const CompareSection = ({ isExample, video1, video2 }) => {

    const router = useRouter()
    const [isWinner1, setIsWinner1] = useState(false)
    const [isWinner2, setIsWinner2] = useState(false)

    const chooseWinner1 = async () => {
        try {
            setIsWinner1(true)
            await axios.post('/api/videos/tournament/like', {
                liked: video1,
                disliked: video2,
                isExample: isExample
            })
        } catch (error) {
            return new Response('Error liking your selected video', { status: 400 })
        } finally {
            router.push(`/compare?example=${isExample}`)
            window.location.reload()
        }
    }

    const chooseWinner2 = async () => {
        try {
            setIsWinner2(true)
            await axios.post('/api/videos/tournament/like', {
                liked: video2,
                disliked: video1,
                isExample: isExample
            })
        } catch (error) {
            return new Response('Error liking your selected video', { status: 400 })
        } finally {
            router.push(`/compare?example=${isExample}`)
            window.location.reload()
        }
    }

    return (
        <div className='flex flex-row justify-evenly pt-10 flex-wrap'>
            <div className=''>
                <div className="overflow-hidden max-w-[22rem]">
                    <div className={`text-3xl ${boogalooFont.className} text-center pt-2`}>{video1.nickname}</div>
                    <div className='bg-rose-500 rounded-3xl p-6 h-auto'>
                        <iframe id='preview' className="h-[68vh]" scrolling='no' src={video1.url}></iframe>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly py-4">
                    <button
                        onClick={chooseWinner1}>
                        <Heart className={isWinner1 ? 'text-cyan-400 fill-red-700 w-14 h-14 animate-spin' : "text-red-700 w-14 h-14 hover:animate-pulse hover:fill-red-700"} />
                    </button>
                </div>
            </div>

            <div className=''>
                <div className="overflow-hidden max-w-[22rem]">
                    <div className={`text-3xl ${boogalooFont.className} text-center pt-2`}>{video2.nickname}</div>
                    <div className='bg-rose-500 rounded-3xl p-6 h-auto'>
                        <iframe id='preview' className="h-[68vh]" scrolling='no' src={video2.url}></iframe>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly py-4">
                    <button
                        onClick={chooseWinner2}>
                        <Heart className={isWinner2 ? 'text-cyan-400 fill-red-700 w-14 h-14 animate-spin' : "text-red-700 w-14 h-14 hover:animate-pulse hover:fill-red-700"} />
                    </button>
                </div>
            </div>
        </div>
    )
}
// }

export default CompareSection