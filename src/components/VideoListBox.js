'use client'

import axios from 'axios'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

const page = ( { video, isExample } ) => {

    const router = useRouter()

    const deleteVideo = async () => {
        try {
            await axios.post('api/videos/remove', {
                url: video.url,
                nickname: video.nickname,
                user: video.user,
                numLiked: video.numLiked
            })
        } catch (error) {
            return new Response('Error deleting video', { status: 400 })
        } finally {
            // window.location.href = '/videos'
            router.push(`/videos/?example=${isExample}`)
        }
    }

    return (
        
        <div className={ isExample ? 'p-4 flex flex-row' : 'p-4 flex flex-row mr-10'}>
            {isExample ? null : (<button className='pr-4' onClick={deleteVideo}>
                <X className='text-red-500 hover:animate-pulse' />
            </button> )}
            <li className='videoListBox bg-slate-200 w-80 h-12 rounded-2xl p-4'>
                <p className='text-gray-500'>{video === undefined ? '' : video.nickname}</p>
            </li>
        </div>
    )

}

export default page