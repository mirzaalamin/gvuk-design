import Hero from '@/components/Hero'
import { getSingleNews } from '@/lib/actions/actions'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateMetadata({ params }) {
    const { slug } = await params
    const news = await getSingleNews(slug)

    if (!news) return notFound()

    const { title, content, } = news;

    return {
        title: `${title} | GVUK Design`,
        description: content.slice(0, 100),
        alternates: {
            canonical: `https://www.gvukdesign.co.uk/news/${slug}`,
        },
        openGraph: {
            title,
            url: `https://www.gvukdesign.co.uk/news/${slug}`,
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
}

const page = async ({ params }) => {
    const { slug } = await params
    const news = await getSingleNews(slug)

    if (!news) return notFound()

    const { id, title, thumbnail, content, categories, date } = news;

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title={title} description={formatDate(date)}
                        imgUrl={thumbnail}
                        titleColor="text-primary"
                        descriptionColor="!text-[#444444] dark:!text-white !font-semibold"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className="dark:bg-gray-900 dark:text-white">
                <div className="container flex flex-col justify-between gap-10 py-16">
                    <div className="body-text" dangerouslySetInnerHTML={{ __html: content }} ></div>
                </div>
            </div>
            {/* Section 2 End */}
        </div >
    )
}

export default page