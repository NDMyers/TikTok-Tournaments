import axios from "axios"

export const addNewTikTok = ( url ) => {
    const partialEmbed = 'https://www.tiktok.com/embed/'

    const videoId = url.split("video/")[1]

    const embed = partialEmbed.concat(videoId)

    return embed
}
