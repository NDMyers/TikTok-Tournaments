import { FC } from 'react'
import VideoListBox from '@/components/VideoListBox'
import { getAllVideos, getExampleVideos } from '../helpers/dbOperations'
import VideosPageButtons from '@/components/VideosPageButtons'

const page = async ({ searchParams }) => {

    // Convert 'true/false' string to boolean true/false
    const isExampleRaw = searchParams.example
    const isExample = isExampleRaw === 'true' ? true : false
    
    const videos = isExample ? await getExampleVideos() : await getAllVideos()

    // console.log(videos)

    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='flex flex-col p-10 max-w-screen-md h-auto items-center'>
                <ul className='flex flex-col'>
                    <VideoListBox video={videos[0]} isExample={isExample}/>
                    <VideoListBox video={videos[1]} isExample={isExample}/>
                    <VideoListBox video={videos[2]} isExample={isExample}/>
                    <VideoListBox video={videos[3]} isExample={isExample}/>
                    <VideoListBox video={videos[4]} isExample={isExample}/>
                    <VideoListBox video={videos[5]} isExample={isExample}/>
                    <VideoListBox video={videos[6]} isExample={isExample}/>
                    <VideoListBox video={videos[7]} isExample={isExample}/>
                </ul>

                <VideosPageButtons isExample={isExample}/>
            </div>
        </div>
    )
}

export default page