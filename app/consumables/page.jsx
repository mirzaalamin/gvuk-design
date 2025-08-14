import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { consumables } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero title="Consumables"
                        description="From industry leading DLP resins from EnvisionTEC, Loctite and Somos to high grade laser wires from Improbond, you know you will have the finest materials for your work."
                        imgUrl="/assets/images/Consumables-1.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {consumables.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}



        </div>
    )
}

export default page