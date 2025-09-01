import Button from '@/components/Button'
import ImageSlider from '@/components/Carousel/ImageSlider'
import Hero from '@/components/Hero'
import VideoSidebar from '@/components/VideoSidebar'
import { pages } from '@/contant/constant'
import Image from 'next/image'
import React from 'react'

const sliderImages = [
    {
        id: 1,
        image: "/assets/images/chesco.jpg"
    },
    {
        id: 2,
        image: "/assets/images/3-rings.jpg"
    },
    {
        id: 3,
        image: "/assets/images/2ring.jpg"
    },
    {
        id: 4,
        image: "/assets/images/94887826_10215966667731775_1763981821957111808_n.jpg"
    },
    {
        id: 5,
        image: "/assets/images/95875214_10216054268121730_4842621715534053376_n.jpg"
    },
    {
        id: 6,
        image: "/assets/images/96736448_10216099199644990_3848787264154894336_n.jpg"
    },
    {
        id: 7,
        image: "/assets/images/97224962_1592340854257814_8927131568170860544_o.jpg"
    },
    {
        id: 8,
        image: "/assets/images/97502865_1592318270926739_4245158371289726976_o.jpg"
    },
    {
        id: 9,
        image: "/assets/images/97972464_10216173259056429_9157675602914836480_n.jpg"
    },
    {
        id: 10,
        image: "/assets/images/98145386_3133966796625281_496880639010668544_n.jpg"
    },
    {
        id: 11,
        image: "/assets/images/100896366_1604803459678220_8601974136949964800_n.jpg"
    },
    {
        id: 12,
        image: "/assets/images/101816266_3135374646519226_583493095530692608_o.jpg"
    },
    {
        id: 13,
        image: "/assets/images/WhatsApp-Image-2020-06-09-at-18.45.41.jpeg"
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
                        title="Bringing you new, time-saving features"
                        logoUrl="https://www.gvukdesign.co.uk/wp-content/uploads/2021/07/MatrixGold-Logo.png"
                        description="MatrixGold adds a new dimension to Gemvision’s advanced CAD solutions. It combines top Matrix and RhinoGold features with the simplified interface of CounterSketch. MatrixGold offers you more power, a curated set of tools, intuitive workflow, and enhanced productivity."
                        imgUrl="/assets/images/YT_Cover_2048x1152-removebg.png"
                        titleColor="text-primary"

                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <h2 className="h2 text-primary">What is MatrixGold?</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>MatrixGold combines top Matrix and RhinoGold features with elements of the user-friendly CounterSketch interface. MatrixGold will simplify your work, resulting in greater productivity and easier customer participation.</p>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1083530176?h=00908b91d6" width="640" frameBorder="0" allowFullScreen className='w-full h-[250px] lg:h-[450]'></iframe>
                        <h2 className="h4 text-primary">Power</h2>
                        <b>Rhino 8 CAD engine</b>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>– Developed using the latest version of McNeel’s Rhino 8 CAD engine.</p>
                            <p>– Provides outstanding speed for greater responsiveness.</p>
                            <p>– Improves presentations, display and more.</p>
                        </div>
                        <hr />
                        <h2 className="h4 text-primary">Flexibility</h2>
                        <b>Parametric history powered builders</b>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6 py-3'>
                            <p>– MatrixGold has enhanced data trees that retain — and remember — how components were built and how they relate to one another.</p>
                            <p>– Use this parametric history/memory to reconfigure design changes quickly.</p>
                        </div>
                        <Image
                            src="/assets/images/MatrixGold_Screen_1.jpg"
                            width={100}
                            height={100}
                            unoptimized
                            alt='MatrixGold_Screen'
                            className='h-auto w-full'
                        />

                        <h2 className="h4 text-primary">Pre-production</h2>
                        <b>Design reporting</b>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6 py-3'>
                            <p>– Improved volumising tools that help you to estimate manufacturing prices.</p>
                            <p>– Users have access to gem mapping, material lists, and additional reporting enhancements.</p>
                            <p>– Combination of features from the RhinoGold Tech Report and- Matrix Reporting tools that promote ease of use and customer value.</p>
                        </div>

                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                        <hr />

                        <h2 className="h4 text-primary">Advanced rendering</h2>
                        <b>New rendering core</b>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6 py-3'>
                            <p>– MatrixGold builds on the Rhino 8 Cycles Engine to make rendering easy and intuitive.</p>
                            <p>– Allows GPU or CPU rendering to make the most of any computer system.</p>
                            <p>– Live preview rendering features material hot-swapping.</p>
                        </div>

                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                        <div className='flex flex-col gap-7 mb-6'>
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/1083530853?h=41caaf6a95" width="640" frameBorder="0" allowFullScreen className='w-full h-[250px] lg:h-[450]'></iframe>
                            <div className='flex items-center justify-between gap-10'>
                                <div>
                                    <Image
                                        src="/assets/images/pre-production.jpg"
                                        width={100}
                                        height={100}
                                        unoptimized
                                        alt='MatrixGold_Screen'
                                        className='h-auto w-full'
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/assets/images/matrixgold_captivating_images_render.jpg"
                                        width={100}
                                        height={100}
                                        unoptimized
                                        alt='MatrixGold_Screen'
                                        className='h-auto w-full'
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className='border-t-1 border-primary' />

                        <h2 className="h4 text-primary">Designed in MatrixGold</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>
                                Art is the science of creation and with MatrixGold creating has just become easier. Excite your clients with live changes by creating something amazing right in front of their eyes.</p>
                        </div>


                        <div className='flex flex-col gap-10 mt-12'>
                            <ImageSlider images={sliderImages} />
                        </div>

                        <h2 className="h4 text-primary">Contact us</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>
                                Our GVUK Design team are here to help and advise on the best solution to your requirements, with full training and technical support.</p>
                        </div>
                        <div className='body-text !text-[14px] !leading-6'>
                            <p>T: <a href='tel:01582727971' className='text-primary'>01582 727 971</a></p>
                            <p>E: <a href='mailto:info@gvukdesign.co.uk' className='text-primary'>info@gvukdesign.co.uk</a></p>
                            <p>E: <a href='mailto:support@gvukdesign.co.uk' className='text-primary'>support@gvukdesign.co.uk</a></p>
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