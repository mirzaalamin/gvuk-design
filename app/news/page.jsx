
import NewsCard from '@/components/Cards/NewsCard'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { laserStars } from '@/contant/constant'
import { getNews, getPostsByCategory } from '@/lib/actions/actions'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "News | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/news/",
    },
    openGraph: {
        title: "News | GVUK Design",
        url: "https://www.gvukdesign.co.uk/news/",
        siteName: "GVUK Design",
        locale: "en_GB",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        site: "@gvukdesign",
    },
    metadataBase: new URL("https://www.gvukdesign.co.uk"),
};


const page = async () => {

    const news = await getNews()
    const trainingNews = await getPostsByCategory(48, 4)



    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="News & Events" description="Keep abreast of technological developments with our latest news section, watch for new developments and industry news."
                        titleColor="text-white lg:!text-[36px]"
                        descriptionColor="!text-white !font-medium"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <h2 className="h3 text-primary">Latest news</h2>

                        <div className='grid lg:grid-cols-2 gap-10'>
                            {news.map((post) => (
                                <NewsCard {...post} key={post.id} />
                            ))}
                        </div>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col p-5 gap-5 bg-[#757575]">
                        <h2 className="h3 text-white">Training & Events</h2>
                        <div className='flex flex-col gap-10'>
                            {trainingNews.map(({ id, title, excerpt, date, thumbnail, url }) => (

                                <div className="flex flex-col gap-5 dark:bg-gray-800 px-0 py-2" key={id}>
                                    <div className="flex-1">
                                        <Link href={`/news/${url}`}>
                                            <Image

                                                src={thumbnail}
                                                alt='Engineering'
                                                quality={100}
                                                width={800}
                                                height={350}
                                                sizes="(max-width: 768px) 100vw, 800px"
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-5 items-center justify-center px-4">
                                        <div className="flex flex-col gap-3">
                                            <Link href={`/news/${url}`}>
                                                <h2 className="h3 !text-[20px] text-white">{title}</h2>
                                            </Link>
                                            <p className="post-description font-[600] !text-white !leading-6">{formatDate(date)}</p>
                                            <div className="post-description font-medium !text-white !leading-6 line-clamp-6" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page