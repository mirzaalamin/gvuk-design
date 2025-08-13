import Image from 'next/image'
import React from 'react'

const VideoSidebar = ({ videoUrl, title, description }) => {
    return (
        <div className="flex flex-col gap-5  dark:bg-gray-800  bg-[#F0F0F0]">
            <div className="flex-1">
                <iframe className='w-[400px] lg:w-[265px] h-[350px] lg:h-[300px]' title="vimeo-player" src={videoUrl} width={265} frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>

            </div>
            <div className="flex flex-1 flex-col justify-center">
                <div className="flex flex-col gap-5">
                    <h2 className="h4 text-primary">{title}</h2>
                    <p className="post-description !leading-6">{description}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoSidebar