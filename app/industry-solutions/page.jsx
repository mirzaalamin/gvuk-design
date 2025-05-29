import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { industrySolutions } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Industry solutions" description="Our technology hub provides the finest tools to grow your business, from MatrixGold and CounterSketch CAD programs to performance laser welders and engravers from LaserStar and Coherent. Plus the Essential Yehuda Lab-Diamond detectors Sherlock and Holmes, ETEC 3D printers and Thunk3D scanners. All with UK support!"
                        imgUrl="/assets/images/engineering.svg"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {industrySolutions.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page