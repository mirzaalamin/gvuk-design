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
        image: "/assets/images/countersketch-gallery-3-crop-u8455.jpg"
    },
    {
        id: 2,
        image: "/assets/images/countersketch-gallery-1-crop-u8449.jpg"
    },
    {
        id: 3,
        image: "/assets/images/countersketch-gallery-2-crop-u8452.jpg"
    },
    {
        id: 4,
        image: "/assets/images/countersketch-gallery-4-crop-u8458.jpg"
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
                        title="Bespoke jewellery has never been so easy"
                        logoUrl="https://www.gvukdesign.co.uk/wp-content/uploads/2021/07/Countersketch-Logo.png"
                        description="CounterSketch is a fully interactive 3D CAD design library allowing you full control to perform real-time 3D CAD changes, create beautiful presentation renders and fully price your design."
                        imgUrl="/assets/images/countersketch-2019.png"
                        titleColor="text-primary"

                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <h2 className="h2 text-primary">Gemvision CounterSketch</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Easy to use, CounterSketch 3D CAD design package provides you with an additional shop window both in-store and on-line, without the burden of holding additional stock. Supported by global jewellery manufacturer Stuller your designs will be delivered in around 3 weeks, hallmarked ready to wear. And of course, you remain in control with the option to select gems from Stuller’s inventory or you may wish to use gems owned by you or your client.</p>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1083528867?h=0cfb7ae466" width="640" frameBorder="0" allowFullScreen className='w-full h-[250px] lg:h-[450]'></iframe>
                        <h2 className="h4 text-primary">Perfect for jewellers who want:</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>– A live client design experience with computer aided design</p>
                            <p>– Control of your bespoke designs</p>
                            <p>– Professional photo-realistic renders for marketing</p>
                            <p>– 1,000’s of unique designs to populate your web site </p>
                            <p>– Easy to use program all your team can use</p>
                        </div>
                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                        <Image
                            src="/assets/images/CounterSketch-Online.jpg"
                            width={100}
                            height={100}
                            unoptimized
                            alt='MatrixGold_Screen'
                            className='h-auto w-full'
                        />
                        <hr className='border-t-1 border-primary' />




                        <h2 className="h4 text-primary">Stage 1: Digital inventory</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6 py-3'>
                            <p>Browse the live library of over 1,000 interactive designs with easy to see design folders</p>
                        </div>
                        <Image
                            src="/assets/images/step1_search.jpg"
                            width={100}
                            height={100}
                            unoptimized
                            alt='MatrixGold_Screen'
                            className='h-auto w-full'
                        />
                        <hr className='border-t-1 border-primary' />



                        <h2 className="h4 text-primary">Stage 2: Customise</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6 py-3'>
                            <p>Perform real-time 3D changes to the design alongside your customer. Turn a design they like in to a design they love. Tailor to price points. Use clients gems, your own or browse the live in-stock inventory. Accurate retail pricing with you controlling margins.</p>
                        </div>
                        <Image
                            src="/assets/images/step2_customize.jpg"
                            width={100}
                            height={100}
                            unoptimized
                            alt='MatrixGold_Screen'
                            className='h-auto w-full'
                        />
                        <hr className='border-t-1 border-primary' />


                        <h2 className="h4 text-primary">Stage 3: Order</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6 py-3'>
                            <p>Submit your bespoke design for manufacturing. Manufactured in-house by a dedicated team of highly skilled goldsmiths at Stuller, a global jewellery manufacturing business with over 30,000 independent jewellers as clients, when ready, your design will be sent direct to a UK Assay office for next day delivery. You will also have direct access to their in-stock list of diamond and gem stones in addition to over 200,000 items of jewellery.</p>
                        </div>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1084187433?h=b89a1e6617" width="640" frameBorder="0" allowFullScreen className='w-full h-[250px] lg:h-[450]'></iframe>
                        <hr className='border-t-1 border-primary' />


                        <h2 className="h4 text-primary">Stage 4: Client Presentation</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6 py-3'>
                            <p>Presenting an item of jewellery that your client helped design is a special moment in their lives and with the renders you presented during the design stage they will always be amazed by the realisation of their dream design. As Matt Stuller says:‘’be a hero in their eyes’’</p>
                        </div>
                        <Image
                            src="/assets/images/countersketch_stage_4.jpg"
                            width={100}
                            height={100}
                            unoptimized
                            alt='MatrixGold_Screen'
                            className='h-auto w-full'
                        />
                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>
                        <hr className='border-t-1 border-primary' />


                        <h2 className="h4 text-primary">Designed in CounterSketch</h2>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>
                                Excite your clients with live changes by creating something amazing right in front of their eyes. Personalise each unique design and with live pricing you are closer in closing that sale.</p>
                        </div>


                        <div className='flex flex-col gap-10 mt-12'>
                            <ImageSlider images={sliderImages} />
                        </div>
                        <hr className='border-t-1 border-primary' />

                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <div className='flex flex-col gap-10'>
                            <div className='dark:bg-gray-800 flex flex-col gap-3 px-4 py-6 bg-[#F0F0F0]'>

                                <h2 className="h4 text-primary">CounterSketch in action</h2>
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