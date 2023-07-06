'use client'

import axios from 'axios'
import { Loader2Icon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

const VideoListBox = ( { video, isExample } ) => {

    const router = useRouter()
    const [delIsLoading, setDelIsLoading] = useState(false)

    const deleteVideo = async () => {
        try {
            setDelIsLoading(true)
            if( video === undefined ) {
                setDelIsLoading(false)
                alert('Cannot delete empty video') 
                return
            }
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
            setDelIsLoading(false)
            router.push(`/videos/?example=${isExample}`)
        }
    }

    return (
        
        <div className={ isExample ? 'sm:p-4 p-3 flex flex-row' : 'sm:p-4 p-3 flex flex-row mr-10'}>
            {isExample ? null : (<button className='pr-4' onClick={deleteVideo}>
                {delIsLoading ? <Loader2Icon className='text-red-500 animate-spin' /> :
                <X className='text-red-500 hover:animate-pulse' />}
            </button> )}
            <li className='videoListBox bg-slate-200 sm:w-80 w-72 h-12 rounded-2xl p-4'>
                <p className='text-gray-500'>{video === undefined ? '' : video.nickname}</p>
            </li>
        </div>
    )

}

export default VideoListBox