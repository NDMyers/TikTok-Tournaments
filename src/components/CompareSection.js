'use client'

import { CheckIcon, Heart, RefreshCwIcon, X } from "lucide-react"
import { Boogaloo } from "next/font/google"
import { useState } from "react"

const boogalooFont = Boogaloo({ weight: '400', subsets: ['latin'] })

const CompareSection = ({ video }) => {

    return (
        <div className=''>
            <div className="overflow-hidden max-w-[22rem]">
                <div className={`text-3xl ${boogalooFont.className} text-center pt-2`}>{video.nickname}</div>
                <div className='bg-rose-500 rounded-3xl p-6 h-auto'>
                    <iframe id='preview' className="h-[68vh]" scrolling='no' src={video.url}></iframe>
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

export default CompareSection