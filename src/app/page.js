import { FormInput } from 'lucide-react'
import { Boogaloo, Inter } from 'next/font/google'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { exampleVideos } from './helpers/examples'
import HomePageButtons from '@/components/HomePageButtons'
import { db } from '@/lib/db'
import { fetchRedis } from './helpers/redis'
import { updateRecent } from './helpers/dbOperations'
import Link from 'next/link'
import HomePageExampleButton from '@/components/HomePageExampleButton'

const interFont = Inter({ subsets: ['latin'] })
const boogalooFont = Boogaloo({ weight: '400', subsets: ['latin'] })

export default function Home() {

  // Put in 8 example videos at start in case user does not want to find videos
  // exampleVideos()

  // result.url, result.recent, result.numLiked



  return (
      <div className='flex flex-col items-center sm:pt-24 pt-4'>
        <h1 className={`text-6xl flex-wrap text-center ${boogalooFont.className}`}>
          TikTok Tournaments
        </h1>

        <div className='colorBox rounded-3xl sm:pt-8 sm:pb-16 pb-10 sm:px-32 px-8 sm:mt-10 mt-4'>
          <div className='flex flex-col items-center py-8'>
            <p className='text-white text-2xl font-semibold text-center'>Submit a video:</p>
            <HomePageExampleButton />
            <div className='h-8 py-10 flex flex-col'>
              <label className='text-white pb-1 text-sm'>Username:</label>
              <input
                autoFocus={true}
                type='text'
                id='userInput'
                placeholder='Enter username'
                className='border border-blue-400 rounded-lg focus:ring focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none p-1.5'
              />
            </div>

            <div className='h-8 py-10 flex flex-col'>
              <label className='text-white pb-1 text-sm'>TikTok URL:</label>
              <input
                type='text'
                id='urlInput'
                placeholder='Enter URL'
                className='border border-blue-400 rounded-lg focus:ring focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none p-1.5'
              />
            </div>

            <div className='h-8 py-10 flex flex-col'>
              <label className='text-white pb-1 text-sm'>Video Nickname:</label>
              <input
                type='text'
                id='nicknameInput'
                placeholder='Enter nickname'
                className='border border-blue-400 rounded-lg focus:ring focus:ring-cyan-400 focus:border-cyan-400 focus:outline-none p-1.5'
              />
            </div>
          </div>     
        </div>

        <HomePageButtons />

      </div>
  )
}