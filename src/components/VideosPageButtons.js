'use client'

import { Router } from 'lucide-react'
import { useRouter } from 'next/navigation'

const VideosPageButtons = ({ isExample }) => {

    const router = useRouter()

    const toHomePage = () => {
        window.location.href = '/'
    }

    const startGame = () => {
        // window.location.href = '/compare'
        router.push(`/compare?query=${isExample}`)
    }

    return (

        <div className='flex flex-row w-full justify-evenly pt-8'>
            <div className='flex w-auto'>
                <button
                    onClick={startGame}
                    className='bg-rose-500 rounded-2xl px-8 py-5 hover:ring hover:ring-cyan-400'
                >
                    <p className='text-white'>Start Game!</p>
                </button>
            </div>
            <div className='flex w-auto'>
                <button
                    onClick={toHomePage}
                    className='bg-rose-500 rounded-2xl px-8 py-5 hover:ring hover:ring-cyan-400'
                >
                    <p className='text-white'>{isExample ? 'To Homepage' : 'Add Another'}</p>
                </button>
            </div>
        </div>


    )

}

export default VideosPageButtons