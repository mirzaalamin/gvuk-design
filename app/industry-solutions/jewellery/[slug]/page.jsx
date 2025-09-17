
import HeroSingleProduct from '@/components/HeroSingleProduct'
import SingleProduct from '@/components/SingleProduct'
import { getSingleProduct } from '@/lib/actions/actions'
import Link from 'next/link'
import React from 'react'


export async function generateMetadata({ params }) {
    const { slug } = await params
    const product = await getSingleProduct(slug)

    if (!product) return notFound()

    const { title, content, } = product;

    return {
        title: `${title} | GVUK Design`,
        description: content.slice(0, 100),
        alternates: {
            canonical: `https://www.gvukdesign.co.uk/industry-solutions/jewellery/${slug}`,
        },
        openGraph: {
            title,
            url: `https://www.gvukdesign.co.uk/industry-solutions/jewellery/${slug}`,
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
    const product = await getSingleProduct(slug)

    if (!product) return notFound()

    const { id, title, logoUrl, thumbnail, content, description, date, sheetEditionUrl, sheetUrl, right_side_video } = product;

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <HeroSingleProduct title={title} description={description}
                        titleColor="text-primary"
                        descriptionColor="text-[#444444]"
                        logoUrl={logoUrl}
                        logoInvert
                        imgUrl={thumbnail}
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    <SingleProduct title={title} content={content}
                        sheetEditionUrl={sheetEditionUrl}
                        sheetUrl={sheetUrl}
                        right_side_video={right_side_video}
                    />

                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page