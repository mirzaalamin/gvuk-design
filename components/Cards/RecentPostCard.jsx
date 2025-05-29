import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const RecentPostCard = ({ id, title, description, imageUrl, url }) => {
    return (
        <div className="flex flex-col gap-5 dark:bg-gray-800 px-4 py-12 bg-[#F0F0F0]">
            <div className="flex-1">
                <Image

                    src={imageUrl}
                    alt='Engineering'
                    quality={100}
                    width={800}
                    height={350}
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-5">
                    <h2 className="h3 text-primary">{title}</h2>
                    <p className="post-description !leading-6">{description}</p>
                </div>
            </div>

        </div>
    )
}

export default RecentPostCard