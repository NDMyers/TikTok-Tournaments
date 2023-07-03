'use client'

import { FC, useState } from 'react'

const page = ( {video} ) => {

    return (
        
        <div className='p-4'>
        <li className='videoListBox bg-slate-200 w-80 h-12 rounded-2xl p-4'>
            <p className='text-gray-500'>{video === undefined ? '' : video.nickname}</p>
        </li>
        </div>
    )

}

export default page