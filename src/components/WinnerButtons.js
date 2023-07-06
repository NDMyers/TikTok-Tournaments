'use client'

import axios from "axios"
import { Loader2Icon } from "lucide-react"
import { useState } from "react"

const WinnerButtons = ({ }) => {

    const [isLoading, setIsLoading] = useState(false)

    const toHomePage = async () => {
        setIsLoading(true)
        window.location.href = '/'
    }

    return (
        <button 
            onClick={toHomePage}
            className="bg-rose-500 sm:px-10 rounded-2xl px-8 py-4 hover:ring hover:ring-cyan-400">
            {isLoading ? <Loader2Icon className="animate-spin text-white"/> : <p className="text-white">Return to Home</p>}
        </button>
    )
}

export default WinnerButtons