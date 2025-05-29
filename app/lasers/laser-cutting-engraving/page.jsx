import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { laserStars } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Laser Welding, Marking &  Engraving for Jewellers" description="Precision quality YAG and Fiber laser welders and engravers for all your jewellery and watch repairs, from welding platinum to silver and stainless steel. \n 3D laser engraving includes a brilliant in-house designed and built integrated software program along with a detailed on-line training package. "
                        imgUrl="/assets/images/laserstar-marking.png"
                        titleColor="text-primary"
                        descriptionColor="text-[#444444]"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {laserStars.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page