import Button from '@/components/Button'
import Panel from '@/components/Cards/Panel'
import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { getPanelsByCategory } from '@/lib/actions/actions'
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "3D Software for Jewellers | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/3d-software/3d-software-for-jewellers",
    },
    openGraph: {
        title: "3D Software for Jewellers | GVUK Design",
        url: "https://www.gvukdesign.co.uk/3d-software/3d-software-for-jewellers",
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


const page = async () => {
    const panels = await getPanelsByCategory(71)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero title="3D design software for Jewellers"
                        logoUrl="/assets/images/Gemvision.png"
                        description="Ground-braking Dynamic MatrixGold and parametric CounterSketch give you total control of all your designs, with superb imaging and video output doubling as a professional marketing tool."
                        imgUrl="/assets/images/3d-software-for-jewellers.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 pb-0 pt-16'>
                <div className='container flex flex-col gap-10'>
                    <p className='text-[17px] text-[#444444] dark:text-white font-light font-openSans'>Intuitive to use, these CAD/CAM programs allow you to design with full control of your models without compromise, controlling weights and scale ahead of manufacturing while offering incredible presentation options to visualise designs with advance CAD rendering and animations.</p>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {panels.reverse().map(({ id, logoUrl, title, button_text, imageUrl, content, button_url }) => (

                        <div key={id} className="flex flex-col  items-center justify-center lg:flex-row gap-16 border-t-2 border-primary dark:bg-gray-800 primary-gradient px-8 py-12">
                            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                                <div className="flex flex-col gap-5">
                                    {logoUrl && (
                                        <div className="flex flex-wrap gap-2">
                                            <Image
                                                src={logoUrl}
                                                alt='Logo'
                                                quality={100}
                                                width={100}
                                                height={100}
                                                unoptimized
                                                className="w-[190px] h-[90px] object-contain dark:invert"
                                            />
                                        </div>
                                    )}
                                    {title && (
                                        <h2 className="h3 text-primary">{title}</h2>
                                    )}
                                    <p className="post-description font-light" dangerouslySetInnerHTML={{ __html: content }}></p>
                                    <Button primary url={button_url} otherClasses="uppercase text-[13px] font-medim">
                                        {button_text}
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image

                                    src={imageUrl}
                                    alt={title}
                                    quality={100}
                                    width={100}
                                    height={150}
                                    className="w-full h-[300px] object-contain"
                                    sizes="(max-width: 768px) 100vw, 150px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Section 3 End */}


        </div>
    )
}

export default page