
import HeroSingleProduct from '@/components/HeroSingleProduct'
import SingleProduct from '@/components/SingleProduct'
import { getSingleProduct } from '@/lib/actions/actions'
import React from 'react'

const page = async ({ params }) => {
    const { slug } = await params
    const product = await getSingleProduct(slug)

    if (!product) return notFound()

    const { id, title, logoUrl, thumbnail, content, description, date, sheetEditionUrl, sheetUrl } = product;

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
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    <SingleProduct content={content}
                        imageUrl={thumbnail}
                        sheetEditionUrl={sheetEditionUrl}
                        sheetUrl={sheetUrl}
                    />
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page