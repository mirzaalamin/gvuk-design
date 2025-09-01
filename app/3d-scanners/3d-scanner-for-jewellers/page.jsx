import Button from '@/components/Button'
import ImageSlider from '@/components/Carousel/ImageSlider'
import Hero from '@/components/Hero'
import VideoSidebar from '@/components/VideoSidebar'
import { pages } from '@/contant/constant'
import React from 'react'

const sliderImages = [
    {
        id: 1,
        image: "/assets/images/scan-and-wed-fit.jpg"
    },
    {
        id: 2,
        image: "/assets/images/test-glen.jpg"
    },
    {
        id: 3,
        image: "/assets/images/pear-ring-scanned-then-rendered-as-rose-gold.jpg"
    },
    {
        id: 4,
        image: "/assets/images/scan-and-wed-fit-render.png"
    },
]

const sideBarVideos = [
    {
        id: 1,
        title: "Ring Scan",
        description: "3D scan of a ring using the Thunk3D jewellery scanner.",
        videoUrl: "https://player.vimeo.com/video/554691539?h=bf96b70c7e"
    },
    {
        id: 2,
        title: "3D Model Scan",
        description: "3D scan of a model horse.",
        videoUrl: "https://player.vimeo.com/video/680411157?h=72a889ac47"
    }
]

const page = () => {

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero
                        title="3D Scanner for Jewellers"
                        logoUrl=""
                        description="3D scanning is perfect for scanning a client’s ring for creating a fitted band or scanning a gemstone to accurately design a head, digital recording of historic items. Auto process makes this an easy-to-use program for exporting STL files."
                        imgUrl="/assets/images/3d-scanner-1.png"
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
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Easy to use scanning in minutes with software and training included. Perfect for gemstones, wed-fit designs and reproduction of treasured items.

                            CMOS,1.31mp sensor with 5-80mm scanning area and 16mm/5mp lens and a resolution of 0.06mm Save the scan as STL for easy import into any cad program. Requires scanning spray to remove reflections – sold separately.</p>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/481177365?h=26b136d9c4" width="640" frameBorder="0" allowFullScreen className='w-full h-[250px] lg:h-[450]'></iframe>
                        <h2 className="h4 text-primary">Details</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• Easy to use software included</p>
                            <p>• Scan objects in minutes</p>
                            <p>• 5MP lens 0.06mm resolution</p>
                            <p>• Full training video provided</p>
                            <p>• Requires Nvidia GPU and Intel CPU Note not AMD or Radeon</p>
                        </div>
                        <h2 className="h4 text-primary">Included in box:</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• 3D scanner</p>
                            <p>• Cables UK plug & USB cable</p>
                            <p>• Calibration plate</p>
                            <p>• USB disk</p>
                            <p>• Die (12 positions)</p>
                            <p>• Software</p>
                            <p>• Link to instruction video</p>
                            <p>• Blue Tack</p>
                        </div>
                        <b className='text-[14px]'>£4,500 +VAT – Free shipping UK & Ireland</b>
                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                        <div className='flex flex-col gap-10 mt-12'>
                            <ImageSlider images={sliderImages} />
                        </div>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <div className='flex flex-col gap-10'>
                            <div className='dark:bg-gray-800 flex flex-col gap-3 px-4 py-6 bg-[#F0F0F0]'>

                                <h2 className="h4 text-primary">3D Scanning videos</h2>
                                <p className="post-description !leading-6">Watch the magic with these short taster videos</p>
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