import PreviewSection from '@/components/PreviewSection'
import { getMostRecent } from '../helpers/dbOperations'
import { fetchRedis } from '../helpers/redis'
import { Boogaloo } from 'next/font/google'

const boogalooFont = Boogaloo({ weight: '400', subsets: ['latin'] })

const page = async ( ) => {

    const recentVideo = await getMostRecent()

    return (
        <div className='w-screen h-screen flex flex-col items-center'>

            <div className={`flex text-center ${boogalooFont.className} text-5xl pt-5 pb-1`}>
                <h1>Video Preview</h1>
            </div>

            <PreviewSection recentVideo={recentVideo} />
            
        </div>
    )
}

export default page