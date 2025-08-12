import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { threeDScanners } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero
                        title="3D Scanners"
                        logoUrl="/assets/images/Thunk-3D-Logo_White.png"
                        description="At last, affordable high-resolution white-light 3D scanners. A fast and easy to use desktop option, for jewellery or dental impressions, plus a hand-held model in full colour for larger items including head and shoulders, engineered parts and works of art. Supplied with tutorial video and UK telephone/video support."
                        imgUrl="/assets/images/3D-Scanners-1.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"

                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {threeDScanners.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}



        </div>
    )
}

export default page