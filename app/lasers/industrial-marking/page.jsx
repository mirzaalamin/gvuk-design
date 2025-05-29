import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import SinglePost from '@/components/SinglePost'
import { laserStars } from '@/contant/constant'
import React from 'react'

const page = () => {
    const descriptionText = (
        <ol>
            <li>
                Robust Floor Stand Model
            </li>
            <li>
                Easy to usee StarFX® Premier Software
            </li>
            <li>
                Robust Safety Enclosure
            </li>
            <li>

                20-100 Watt Models
            </li>
        </ol>
    )
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="FiberCube® Industrial Marking + Engraving System 3801 Series" description={descriptionText}

                        titleColor="text-primary"
                        descriptionColor="text-[#444444]"
                        logoUrl="/assets/images/LaserStar_Logo_Red-1200px.png"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    <SinglePost description="FiberCube® Laser Marking+Engraving Systems are an active tool for high-speed direct part marking, traceability, branding and product adornment in a closed workspace design. Built to the highest standards of quality, the 3801 series’ robust design is an excellent solution for both short and long-run product cycles. FiberCube® Systems o er state-of-the-art technology with the highest laser beam quality and 80,000+ hours of laser engine maintenance-free operation. High precision markings are achievable on almost any type of material, including gold, platinum, silver, brass, stainless steel, carbide, copper, titanium, and aluminium, as well as a wide variety of medical-grade alloys and plastics."
                        imageUrl="/assets/images/industrial-marking.png"
                    />
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page