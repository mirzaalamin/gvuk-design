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

export const metadata = {
    title: "3D Scanners for Engineers | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/3d-scanners/3d-scanners-for-engineers",
    },
    openGraph: {
        title: "3D Scanners for Engineers | GVUK Design",
        url: "https://www.gvukdesign.co.uk/3d-scanners/3d-scanners-for-engineers",
        siteName: "GVUK Design",
        locale: "en_GB",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        site: "@gvukdesign",
    },
    metadataBase: new URL("https://www.gvukdesign.co.uk"),
};


const page = () => {

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 mt-[85px] lg:mt-[110px] !border-t-2 !border-primary'>
                <div className="container">
                    <Hero
                        title="3D Scanners for Engineers"
                        logoUrl=""
                        description="Perfect re-production of models for editing in your own cad program, this High quality 3D scanner scans to 5-80mm with a resolution at 0.06mm."
                        imgUrl="/assets/images/3D-Scanners-for-Engineers-1-2.png"
                        titleColor="text-primary"

                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <h2 className="h2 text-primary font-light">How 3D scanning can help your business</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Accurately scan and save data as STL files that can be edited in any modern CAD software in either black and white or full colour. Includes a pair of red focal pointers to help you stay in focus and with a scan size are of 5-100cm you have a single file with 0.04mm accuracy.</p>

                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/481177365?h=26b136d9c" width="640" height={500} frameBorder="0" allowFullScreen className='w-full h-[250px] lg:h-[450]'></iframe>

                        <Image src="/assets/images/3D-scanners.png" className='h-[300px] lg:h-[550px] w-full primary-gradient' width={400} height={200} alt='3D-scanners' />

                        <h2 className="h2 text-primary font-light">Desktop 3D Scanner for Engineers</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Desktop scanner scans to a single file objects 50-80mm using the CMOS,1.31mp and 16mm/5mp lens. The included software allows you to easily bring multiple scans together, trim unwanted areas and post mesh edit to remove and smooth areas.</p>

                        <h2 className="h4 text-primary">Details</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• Sensor: CMOS, 1.31mp × 2</p>
                            <p>• Scan volume: 5–80 mm</p>
                            <p>• Raster: 1280 × 1080 DLP = 8 mm × 6 mm</p>
                            <p>• Scan speed: 1–3 s/frame</p>
                            <p>• Lens: 16 mm / 5 mp × 2</p>
                            <p>• Scan mode: Auto scan</p>
                            <p>• Alignment: Feature / Mark Align</p>
                            <p>• Resolution: 0.06 mm or 0.08 mm</p>
                            <p>• Certificate: CE / FCC / WEEE / CNAS</p>
                            <p>• Accuracy: &lt; 10 μm or 15 nm</p>
                            <p>• Export format: STL / AC</p>
                            <p>• PC requirements: Nvidia GM &gt; 2 GB</p>
                            <p>• Requires Nvidia GPU and Intel CPU (not AMD or Radeon)</p>

                        </div>
                        <b className='text-[14px]'>£4,500 +VAT</b>

                        <Image src="/assets/images/3D-Scanner-for-Engineers-1.png" className='h-[350px] lg:h-[550px] w-full primary-gradient' width={400} height={500} alt='3D-Scanner-for-Engineers' />

                        <h2 className="h2 text-primary font-light">Handheld 3D Scanner for Engineers</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>The hand-held full colour 3D scanner is perfect for capturing the detail on clothing, tools and furniture. Larger items can be scanned in parts and assembled in the software, this is perfect for accurate reproductions.</p>

                        <h2 className="h4 text-primary">Details</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <b className='text-[14px]'>Full Colour Range: ARCHER S</b>
                            <p>• Camera: Monochrome, 1.3mp × 2 + Full color, 1.3mp × 1</p>
                            <p>• Lens: 16mm / 5mp</p>
                            <p>• Raster: DLP 1280 × 1080</p>
                            <p>• Resolution: 0.1 mm</p>
                            <p>• Light Area: 30 × 24 cm; 12 × 10 cm</p>
                            <p>• Frame accuracy: 0.005 mm</p>
                            <p>• Scan speed: 3,000,000 points/s, 12–15 f/s</p>
                            <p>• Scan volume: 5–100 cm</p>
                            <p>• Texture: Yes</p>
                            <p>• Alignment: Feature align (support group register), Mix align, Mark align, Frame align</p>
                            <p>• Data format: ASC / STL / PLY</p>
                            <p>• Photogrammetric: No</p>
                            <p>• Advantages: Colour restore for regular display</p>
                            <p>• Public API: USB 3.0; C++ interface</p>
                            <p>• PC Requirements: Nvidia as main GPU; Win7 (64-bit) and higher</p>
                            <p>• Certification: CE / FCC / WEEE / CNAS</p>
                            <p>• Software: Fill holes; Decimate; Smoothen</p>
                            <p>• Requires Nvidia GPU and Intel CPU (not AMD or Radeon)</p>
                        </div>


                        <b className='text-[14px]'>Price: £5,750 +VAT</b>

                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>


                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <b className='text-[14px]'>Full Colour Range: ARCHER W</b>
                            <p>• Camera: Monochrome, 1.3mp × 2 + Full color, 1.3mp × 1</p>
                            <p>• Lens: 12mm / 5mp</p>
                            <p>• Raster: DLP 1280 × 1080</p>
                            <p>• Resolution: 0.2 mm</p>
                            <p>• Light Area: 40 × 32 cm; 20 × 16 cm</p>
                            <p>• Frame accuracy: 0.1 mm</p>
                            <p>• Scan speed: 3,000,000 points/s, 12–15 f/s</p>
                            <p>• Scan volume: 8–200 cm</p>
                            <p>• Texture: Yes</p>
                            <p>• Alignment: Feature align (support group register), Mix align, Mark align, Frame align</p>
                            <p>• Data format: ASC / STL / PLY</p>
                            <p>• Photogrammetric: No</p>
                            <p>• Advantages: Best choice for face/human scan</p>
                            <p>• Public API: USB 3.0; C++ interface</p>
                            <p>• PC Requirements: Nvidia as main GPU; Win7 (64-bit) and higher</p>
                            <p>• Certification: CE / FCC / WEEE / CNAS</p>
                            <p>• Software: Fill holes; Decimate; Smoothen</p>
                            <p>• Requires Nvidia GPU and Intel CPU (not AMD or Radeon)</p>
                        </div>


                        <b className='text-[14px]'>Price: £5,750 +VAT</b>

                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>


                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <b className='text-[14px]'>Monochrome Range: FISHER </b>
                            <p>• Camera: Monochrome, 1.3mp × 2</p>
                            <p>• Lens: 16mm / 5mp</p>
                            <p>• Raster: DLP 1280 × 1080</p>
                            <p>• Resolution: 0.1 mm</p>
                            <p>• Light Area: 30 × 24 cm; 12 × 10 cm</p>
                            <p>• Frame accuracy: 0.04 mm</p>
                            <p>• Scan speed: 3,000,000 points/s, 12–15 f/s</p>
                            <p>• Scan volume: 5–100 cm</p>
                            <p>• Texture: No</p>
                            <p>• Alignment: Feature align (support group register), Mix align, Mark align, Frame align</p>
                            <p>• Data format: ASC / STL</p>
                            <p>• Photogrammetric: Yes (optional), volume accuracy within 0.1 mm/m</p>
                            <p>• Advantages: Accuracy preference</p>
                            <p>• Public API: USB 3.0; C++ interface</p>
                            <p>• PC Requirements: Nvidia as main GPU; Win7 (64-bit) and higher</p>
                            <p>• Certification: CE / FCC / WEEE / CNAS</p>
                            <p>• Software: Fill holes; Decimate; Smoothen</p>
                            <p>• Requires Nvidia GPU and Intel CPU (not AMD or Radeon)</p>
                        </div>


                        <b className='text-[14px]'>Price: £4,850 +VAT</b>

                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>


                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <b className='text-[14px]'>Monochrome Range: FISHER W</b>
                            <p>• Camera: Monochrome, 1.3mp × 2</p>
                            <p>• Lens: 12mm / 5mp</p>
                            <p>• Raster: DLP 1280 × 1080</p>
                            <p>• Resolution: 0.2 mm</p>
                            <p>• Light Area: 40 × 32 cm; 20 × 16 cm</p>
                            <p>• Frame accuracy: 0.1 mm</p>
                            <p>• Scan speed: 3,000,000 points/s, 12–15 f/s</p>
                            <p>• Scan volume: 8–200 cm</p>
                            <p>• Texture: No</p>
                            <p>• Alignment: Feature align (support group register), Mix align, Mark align, Frame align</p>
                            <p>• Data format: ASC / STL</p>
                            <p>• Photogrammetric: Yes (optional), volume accuracy within 0.1 mm/m</p>
                            <p>• Advantages: Scan big objects in high resolution</p>
                            <p>• Public API: USB 3.0; C++ interface</p>
                            <p>• PC Requirements: Nvidia as main GPU; Win7 (64-bit) and higher</p>
                            <p>• Certification: CE / FCC / WEEE / CNAS</p>
                            <p>• Software: Fill holes; Decimate; Smoothen</p>
                            <p>• Requires Nvidia GPU and Intel CPU (not AMD or Radeon)</p>
                        </div>


                        <b className='text-[14px]'>Price: £4,850 +VAT</b>

                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <div className='flex flex-col gap-10'>
                            <div className='dark:bg-gray-800 flex flex-col gap-3 px-4 py-6 bg-[#F0F0F0]'>

                                <h2 className="h4 text-primary ">3D Model Scanning</h2>

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