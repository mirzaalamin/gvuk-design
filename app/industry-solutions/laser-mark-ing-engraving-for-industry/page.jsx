import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { jewelleryIndustry } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Jewellery Industry" description="One-shop-stop for all the latest in technology for jewellers with professional training, support, and servicing to ensure you are offering your clients the very best experience and value for money. It’s a competitive world, with the right tools we can all compete."
                        imgUrl="/assets/images/jewellery.svg"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {jewelleryIndustry.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page