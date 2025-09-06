import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'


export const metadata = {
    title: "3D Software | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/3d-software/",
    },
    openGraph: {
        title: "3D Software | GVUK Design",
        url: "https://www.gvukdesign.co.uk/3d-software/",
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
            <div className='bg-primary dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero title="3D Software" logoUrl="/assets/images/Gemvision.png" description="Designs reflect your personality, image and branding, controlling that process in-house ensures the integrity of your styling and reduces time to market."
                        imgUrl="/assets/images/MatrixGold.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    <p className='text-[17px] text-[#444444] dark:text-white font-light font-openSans'>Intuitive to use, these CAD/CAM programs allow you to design with full control of your models without compromise, controlling weights and scale ahead of manufacturing while offering incredible presentation options to visualise designs with advance rendering and animations.</p>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 Start */}
            <div className='bg-white dark:bg-gray-900 pt-0 pb-16'>
                <div className='container flex flex-col gap-10'>
                    <div className="flex flex-col lg:flex-row gap-10 border-t-2 border-primary dark:bg-gray-800 primary-gradient px-8 py-10">
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                            <div className="flex flex-col gap-5">

                                <h2 className="h3 text-primary">3D Software for Jewellers</h2>
                                <p className="post-description">Ground-braking Dynamic MatrixGold and parametric CounterSketch give you total control of all your designs, with superb imaging and video output doubling as a professional marketing tool.</p>
                                <Button primary url="/3d-software/3d-software-for-jewellers/" otherClasses="uppercase text-[13px]">
                                    View Software
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <iframe className="w-full" title="vimeo-player" src="https://player.vimeo.com/video/1083561541?h=b92c91cebc" width="380" height="250" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3 End */}


        </div>
    )
}

export default page