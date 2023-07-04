'use client'

import axios from "axios"

const WinnerButtons = ({ isExample }) => {

    const toHomePage = async () => {
        // try {
        //     // reset number liked in each video 
        //     await axios.post('api/videos/numliked', isExample)     
        // } catch (error) {
        //     return new Response('Error finishing tournament', { status: 400 })
        // } finally {
        //     window.location.href = '/'
        // }
        window.location.href = '/'
    }

    return (
        <button onClick={toHomePage}>return home</button>
    )
}

export default WinnerButtons