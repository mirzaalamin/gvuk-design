import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { medicalIndustry } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Laser Welding, Cutting & non surface marking for the Medical Industry" description="Lasers for Dental Labs, Maxillofacial & Orthodontic Departments Welding of titanium plates, filling and repairing of  brackets, wires, partials, rests and bridges and with laser wire to match material properties you will be assured of an invisible and secure weld. See the Improbond section for details on available wires."
                        imgUrl="/assets/images/gvuk_medical.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {medicalIndustry.map((post) => (
                        <PostCard {...post} key={post.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page