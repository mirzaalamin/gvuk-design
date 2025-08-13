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
        title: "3D Model Scan",
        description: "3D scan of a model horse.",
        videoUrl: "https://player.vimeo.com/video/680411157?h=72a889ac47"
    },
    {
        id: 2,
        title: "3D Model Scan",
        description: "3D scan of a pewter and tin model from Calpe Miniatures",
        videoUrl: "https://www.gvukdesign.co.uk/wp-content/uploads/2021/09/ludzow-3.mp4"
    },
    {
        id: 3,
        title: "3D Cockerall Scan",
        description: "",
        videoUrl: "https://www.gvukdesign.co.uk/wp-content/uploads/2021/09/cockerall-scanned.mp4"
    },
]

const page = () => {

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero
                        title="3D Scanners for Model Makers"
                        logoUrl=""
                        description="Perfect re-production of models for editing in your own cad program, this High quality 3D scanner scans to 5-80mm with a resolution at 0.06mm."
                        imgUrl="/assets/images/3D-Scanners-for-Model-Makers-1-1.png"
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
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>You can scale these scanned files which is perfect for capturing intricate detail. The hand held colour scanner can be used to scan life-sized models which can be scaled giving you a fantastic level of detail and accuracy.</p>

                        <Image src="/assets/images/Lutzow_First_Frame-1.png" className='h-[350px] lg:h-full w-full' width={400} height={500} alt='Lutzow_First_Frame' />

                        <Image src="/assets/images/Desktop-3D-Scanner-for-Model-Makers-1.png" className='h-[350px] lg:h-full w-full primary-gradient' width={400} height={500} alt='Desktop-3D-Scanner-for-Model-Makers' />

                        <h2 className="h2 text-primary">Desktop 3D scanner for Model Makers</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Desktop scanner scans to a single file objects 50-80mm using the CMOS,1.31mp and 16mm/5mp lens. The included software allows you to easily bring multiple scans together, trim unwanted areas and post mesh edit to remove and smooth areas.</p>

                        <h2 className="h4 text-primary">Included in box:</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• Thunk3D scanner</p>
                            <p>• Calibration tray</p>
                            <p>• Parts tray</p>
                            <p>• Clamp</p>
                            <p>• UK power lead</p>
                            <p>• USB connect lead</p>
                            <p>• Training video</p>
                            <p>• Remote UK support</p>
                            <p>• 12-month warranty</p>

                        </div>
                        <b className='text-[14px]'>£4,500 +VAT</b>

                        <Image src="/assets/images/Hand-Held-3D-Scanner-for-Model-Makers-1.png" className='h-[350px] lg:h-full w-full primary-gradient' width={400} height={500} alt='Hand-Held-3D-Scanner-for-Model-Makers' />

                        <h2 className="h2 text-primary">Hand-held 3D scanner for Model Makers</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>The hand-held full colour 3D scanner is perfect for capturing the detail on clothing, tools and furniture. Larger items can be scanned in parts and assembled in the software, this is perfect for accurate reproductions.</p>

                        <h2 className="h4 text-primary">Details</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• Standard mode: 10-100cm; Fine mode: 5-50cm</p>
                            <p>• Lens 12mm/5mp</p>
                            <p>• Scan accuracy &lt; 0.04mm (single frame) &lt; 0.5mm/M for volume accuracy</p>
                            <p>• Requires Nvidia GPU and Intel CPU Note not AMD or Radeon</p>
                        </div>


                        <h2 className="h4 text-primary">Included in box:</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• Thunk3D handheld full colour scanner,</p>
                            <p>• Calibration tray</p>
                            <p>• Revolving display tray</p>
                            <p>• UK power lead,</p>
                            <p>• USB connect lead</p>
                            <p>• Training video</p>
                            <p>• Remote UK support</p>
                            <p>• 12-month warranty</p>
                        </div>


                        <b className='text-[14px]'>£5,250 +VAT</b>
                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <div className='flex flex-col gap-10'>
                            <div className='dark:bg-gray-800 flex flex-col gap-3 px-4 py-6 bg-[#F0F0F0]'>

                                <h2 className="h4 text-primary">3D Model Scanning</h2>

                                <div className='mt-10 flex flex-col gap-5'>
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