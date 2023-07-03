import { FC } from 'react'
import VideoListBox from '@/components/VideoListBox'
import { getAllVideos } from '../helpers/dbOperations'
import VideosPageButtons from '@/components/VideosPageButtons'

const page = async () => {
    
    const videos = await getAllVideos()
    console.log(videos)

    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='flex flex-col p-10 outline-dashed max-w-screen-md h-auto items-center'>
                <ul className='flex flex-col'>
                    <VideoListBox video={videos[0]}/>
                    <VideoListBox video={videos[1]}/>
                    <VideoListBox video={videos[2]}/>
                    <VideoListBox video={videos[3]}/>
                    <VideoListBox video={videos[4]}/>
                    <VideoListBox video={videos[5]}/>
                    <VideoListBox video={videos[6]}/>
                    <VideoListBox video={videos[7]}/>
                </ul>

                <VideosPageButtons />
            </div>
        </div>
    )
}

export default page