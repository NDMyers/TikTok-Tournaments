import WinnerButtons from "@/components/WinnerButtons"
import { db } from "@/lib/db"
import { Boogaloo } from "next/font/google"
import { fetchRedis } from "../helpers/redis"

const boogalooFont = Boogaloo({ weight: '400', subsets: ['latin'] })

const page = async ({ searchParams }) => {

    const winnerUrl = searchParams.videoId
    const winnerNickname = searchParams.videoNickname
    const isExample = searchParams.example

    return ( 
        <div className='w-full h-full'>
            <div className=''>
                <div className="overflow-hidden max-w-[22rem]">
                    <div className={`text-3xl ${boogalooFont.className} text-center pt-2`}>{winnerNickname}</div>
                    <div className='bg-rose-500 rounded-3xl p-6 h-auto'>
                        <iframe id='preview' className="h-[68vh]" scrolling='no' src={winnerUrl}></iframe>
                    </div>
                </div>
            </div>
            <WinnerButtons isExample={isExample} />
        </div>
    )

}

export default page