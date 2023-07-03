'use client'

const VideosPageButtons = ({}) => {

    const toHomePage = () => {
        window.location.href = '/'
    }

    return (

        <div className='flex flex-row w-full justify-evenly pt-8'>
            <div className='flex w-auto'>
                <button
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
                    <p className='text-white'>Add Another</p>
                </button>
            </div>
        </div>


    )

}

export default VideosPageButtons