import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { threeDSoftwares } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero title="3D design software for Jewellers" preventLogoInvert={true} logoUrl="/assets/images/Gemvision.png" description="Ground-braking Dynamic MatrixGold and parametric CounterSketch give you total control of all your designs, with superb imaging and video output doubling as a professional marketing tool."
                        imgUrl="/assets/images/3d-software-for-jewellers.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 pb-0 pt-16'>
                <div className='container flex flex-col gap-10'>
                    <p className='text-[17px] text-[#444444] dark:text-white font-light font-openSans'>Intuitive to use, these CAD/CAM programs allow you to design with full control of your models without compromise, controlling weights and scale ahead of manufacturing while offering incredible presentation options to visualise designs with advance CAD rendering and animations.</p>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {threeDSoftwares.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
            {/* Section 3 End */}


        </div>
    )
}

export default page