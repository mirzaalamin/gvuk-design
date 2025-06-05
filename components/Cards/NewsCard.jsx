import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const NewsCard = ({ id, title, slug, excerpt, content, thumbnail, url, categories, date }) => {
    return (
        <div className="gap-5 dark:bg-gray-800 bg-[#F0F0F0]">
            <div className="flex-1">
                <Image

                    src={thumbnail}
                    alt='Engineering'
                    quality={100}
                    width={800}
                    height={350}
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>
            <div className="flex flex-1 flex-col gap-5 p-5 items-center justify-center">
                <div className="flex flex-col gap-5">
                    <h2 className="h3 text-primary line-clamp-2"><Link href={`/news/${slug}`}>{title}</Link></h2>
                    <div dangerouslySetInnerHTML={{ __html: excerpt }} className="post-description !leading-6 line-clamp-6"></div>
                </div>
            </div>

        </div>
    )
}

export default NewsCard