'use client'

import { removeVideo } from "@/app/helpers/tiktok"
import axios, { AxiosError } from "axios"
import { CheckIcon, Heart, RefreshCwIcon, X } from "lucide-react"
import { Boogaloo } from "next/font/google"
import { useState } from "react"

const boogalooFont = Boogaloo({ weight: '400', subsets: ['latin'] })

const PreviewSection = ({ recentVideo }) => {

    const [isRefresh, setIsRefresh] = useState(false)
    const [isOkay, setIsOkay] = useState(false)
    const [isRemove, setIsRemove] = useState(false)

    const refreshPage = () => {
        setIsRefresh(true)
        window.location.href='/preview'
    }

    const acceptVideo = async () => {
        try {
            await axios.post('/api/videos/add', {
                url: recentVideo.url,
                nickname: recentVideo.nickname,
                user: recentVideo.user,
                numLiked: recentVideo.numLiked
            })
        } catch (error) {
            return new Response('Error adding video', { status: 400 })
        } finally {
            window.location.href='/videos'
        }
    }

    const removeVideo = () => {
        window.location.href = '/'
    }


    return (
        <div className=''>
            <div className="overflow-hidden max-w-[22rem]">
                <div className={`text-3xl ${boogalooFont.className} text-center pt-2`}>{recentVideo.nickname}</div>
                <div className='bg-rose-500 rounded-3xl p-6 h-auto'>
                    <iframe id='preview' className="h-[68vh]" scrolling='no' src={recentVideo.url}></iframe>
                </div>
            </div>


            <div className="flex flex-row justify-evenly py-4">
                <button onClick={acceptVideo}>
                    <CheckIcon className="text-green-700 w-14 h-14 hover:animate-pulse"/>
                </button>
                <button
                    onClick={refreshPage}>
                    <RefreshCwIcon className={isRefresh? 'w-11 h-11 animate-spin' : 'hover:animate-spin w-11 h-11'}/>
                </button>
                <button onClick={removeVideo}>
                    <X className="text-red-700 w-14 h-14 hover:animate-pulse" />
                </button>
            </div>
        </div>
    )
}

export default PreviewSection
