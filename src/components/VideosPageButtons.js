'use client'

import { Loader2Icon, Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const VideosPageButtons = ({ numVideos, isExample }) => {

    const router = useRouter()
    const [startIsLoading, setStartIsLoading] = useState(false)
    const [addIsLoading, setAddIsLoading] = useState(false)

    const toHomePage = () => {
        setAddIsLoading(true)
        window.location.href = '/'
    }

    const startGame = () => {
        setStartIsLoading(true)
        // window.location.href = '/compare'
        router.push(`/compare?example=${isExample}`)
    }

    return (

        <div className='flex flex-row w-full justify-evenly pt-8'>
            <div className='flex w-auto'>
                { numVideos < 8 ? <button className='bg-slate-500 rounded-2xl px-8 py-5 hover:ring hover:ring-white cursor-default'><p className='text-white'>{numVideos}/8 to Start</p></button>
                : (
                <button
                    onClick={startGame}
                    className='bg-rose-500 rounded-2xl px-8 py-5 hover:ring hover:ring-cyan-400'
                >
                {startIsLoading ? <Loader2Icon className="animate-spin text-white"/> : <p className="text-white">Start Game!</p>}
                </button> )}
            </div>
            <div className='flex w-auto'>
                <button
                    onClick={toHomePage}
                    className='bg-rose-500 rounded-2xl px-8 py-5 hover:ring hover:ring-cyan-400'
                >
                {addIsLoading ? <Loader2Icon className="animate-spin text-white"/> : <p className="text-white">{isExample ? 'To Homepage' : 'Add Another'}</p>}
                </button>
            </div>
        </div>


    )

}

export default VideosPageButtons