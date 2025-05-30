import React from 'react'
import { Video } from './Video'
import { cn, isYouTubeUrl } from '@/lib/utils'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

const TitleVideoSection = ({ popup, title, description, videoUrl, reverse }) => {
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
                    <Dialog>
                        <DialogTrigger asChild>
                            <Image
                                src="/assets/images/thumbnail.png"
                                height={250}
                                width={300}
                                quality={100}
                                alt='thumbnail'
                                className='w-full cursor-pointer'
                                sizes="(max-width: 768px) 100vw, 800px"

                            />
                        </DialogTrigger>
                        <DialogContent className="bg-white dark:bg-gray-800 border-none p-4 pt-10">
                            <DialogHeader>
                                <DialogTitle></DialogTitle>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                ></iframe>
                            </DialogHeader>

                        </DialogContent>
                    </Dialog>

                ) : (
                    <Video videoUrl={videoUrl} />
                )}
            </div>
        </div>
    )
}

export default TitleVideoSection