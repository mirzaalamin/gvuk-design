import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import ImageSlider from '@/components/Carousel/ImageSlider'
import Hero from '@/components/Hero'
import VideoSidebar from '@/components/VideoSidebar'
import { pages } from '@/contant/constant'
import Image from 'next/image'
import React from 'react'


const sideBarVideos = [
    {
        id: 1,
        title: "Bite-plane down",
        description: "",
        videoUrl: "https://player.vimeo.com/video/611042994?h=9e8cd1551b"
    },
    {
        id: 2,
        title: "Bite-plane up",
        description: "",
        videoUrl: "https://player.vimeo.com/video/611041883?h=97ae2fa231"
    }
]

const page = () => {

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero
                        title="3D Scanner for Orthodontics, Dentists & Dental Labs"
                        logoUrl=""
                        description="High precision fast scanning From Thunk3D. 0.01mm accuracy with a CMOS 1.31mp sensor, a 16mm 5mp lens and a 120mm scan area. This scanner comes with its own software for auto filling for water-tight stl files, essential for 3D printing."
                        imgUrl="/assets/images/3D-scanners.png"
                        titleColor="text-primary"

                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <h2 className="h2 text-primary">How 3D scanning can help your business</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Perfect solution for restorations, orthodontics and implants. Accurately scan impressions that can be taken into any cad software for editing and 3D printing. You will appreciate the accuracy of precision scanning 3D printed models.</p>
                        <Image src="/assets/images/dental-scan-impression.jpg" className='h-[350px] lg:h-[500px] w-full' width={400} height={500} alt='dental-scan-impression' />

                        <h2 className="h4 text-primary">Details</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• Sensor: CMOS,1.31mp * 2</p>
                            <p>• Scan volume: 10-150 mm</p>
                            <p>• Lens: 16mm/5mp</p>
                            <p>• Requires Nvidia GPU and Intel CPU Note not AMD or Radeon</p>

                        </div>
                        <h2 className="h4 text-primary">Included in box:</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• Thunk3D scanner</p>
                            <p>• Calibration tray</p>
                            <p>• Crown tray</p>
                            <p>• Denture clamp</p>
                            <p>• UK power lead</p>
                            <p>• USB connect lead</p>
                            <p>• Training video</p>
                            <p>• Remote UK support</p>
                            <p>• 12-month warranty</p>
                        </div>
                        <b className='text-[14px]'>£4,500 +VAT</b>
                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                        <div className='flex flex-col gap-10 mt-12'>
                            <Image src="/assets/images/dental-scan-impresion.jpg" className='h-[400px] lg:h-[600px] w-full' width={400} height={600} alt='dental-scan-impression' />
                        </div>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <div className='flex flex-col gap-10'>
                            <div className='dark:bg-gray-800 flex flex-col gap-3 px-4 py-6 bg-[#F0F0F0]'>

                                <h2 className="h4 text-primary">3D Dental Scanning</h2>
                                <p className="post-description !leading-6">3D Impressions scanned and ready for editing in any dental software.</p>
                                <div className='mt-10'>
                                    {sideBarVideos.map((item) => (
                                        <VideoSidebar {...item} key={item.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}



        </div>
    )
}

export default page