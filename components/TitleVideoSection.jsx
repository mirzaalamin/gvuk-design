import React from 'react'
import { Video } from './Video'
import { cn, isYouTubeUrl } from '@/lib/utils'

const TitleVideoSection = ({ title, description, videoUrl, reverse }) => {
    const isYoutube = isYouTubeUrl(videoUrl)
    return (
        <div className={cn(
            "container flex flex-col gap-10",
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">

                <div className="flex flex-col gap-5 text-center">
                    <h2 className="h2 text-primary">{title}</h2>
                    <p className="body-text">{description}</p>
                </div>
            </div>
            <div className="flex-1">
                {isYoutube ? (
                    <iframe
                        width="100%"
                        height="315"
                        src={videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>
                ) : (

                    <Video videoUrl={videoUrl} />
                )}
            </div>
        </div>
    )
}

export default TitleVideoSection