import WinnerButtons from "@/components/WinnerButtons"
import { db } from "@/lib/db"
import { Boogaloo } from "next/font/google"
import { fetchRedis } from "../helpers/redis"

const boogalooFont = Boogaloo({ weight: '400', subsets: ['latin'] })

const page = async ({ }) => {

    const gametype = await db.get('gametype')
    const winnerId = await db.srandmember(gametype)
    const winner = await db.get(winnerId)

    return ( 
        <div className='w-screen h-screen flex flex-col items-center justify-evenly'>
            <div className=''>
                <div className="overflow-hidden max-w-[22rem]">
                    <p className={`text-5xl ${boogalooFont.className} text-center`}>Winner!</p>
                    <div className={`text-3xl ${boogalooFont.className} text-center pt-2`}>{winner.nickname}</div>
                    <div className='bg-rose-500 rounded-3xl p-6 h-auto'>
                        <iframe id='preview' className="h-[68vh]" scrolling='no' src={winner.url}></iframe>
                    </div>
                </div>
            </div>
            <WinnerButtons />
        </div>
    )

}

export default page