import Button from '@/components/Button'
import IconBox from '@/components/Cards/IconBox'
import PostCard from '@/components/Cards/PostCard'
import VideoCard from '@/components/Cards/VideoCard'
import Hero from '@/components/Hero'
import VideoPopup from '@/components/popups/VideoPopup'
import { industrySolutions, pages, whatsNew } from '@/contant/constant'
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "Yehuda | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/yehuda/",
    },
    openGraph: {
        title: "Yehuda | GVUK Design",
        url: "https://www.gvukdesign.co.uk/yehuda/",
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
            <div className='dark:bg-gray-800 primary-gradient pt-[100px]'>
                <div className="container">
                    <Hero title="Yehuda CVD and HPHT lab grown diamond detector" description="Uses the same 100% detection rate technology as the Sherlock Holmes 2.0"
                        imgUrl="/assets/images/Sherlok-Watson-AI-2025-scaled.png"
                        titleColor="text-primary"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-0'>
                    <div className="flex flex-col lg:flex-row py-8 lg:py-0 gap-10">
                        <div className="flex flex-1 flex-col lg:pt-0 gap-5 justify-center ">
                            <div className="flex flex-col gap-5 lg:py-[100px]">
                                <h1 className={`hero-title !font-bold text-primary`}>Arriving soon!</h1>
                                <h2 className={`hero-title text-primary`}>No Doubts. Just Answers.
                                    Meet the new Dr Watson AI & Sherlock AI – Smarter Diamond Detection</h2>
                                <div className={`body-text font-light`} >Instant, colour-coded results for Diamond, HPHT, CVD, CZ & Moissanite – no more guesswork.</div>

                                <p>The next-generation Yehuda detectors now feature a built-in camera and a dedicated phone – no need to use your own device.</p>
                                <h6 className='text-primary font-bold'>PRE-ORDER NOW AT OUR EXCLUSIVE LAUNCH PRICE!</h6>
                                <p>Buy the current Dr Watson or Sherlock 4 today and enjoy a
                                    FREE UPGRADE to the latest and most advanced AI model the
                                    moment stock arrives!</p>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <Image
                                src="/assets/images/new-for-2025.png"
                                alt='Laser star'
                                quality={100}
                                width={800}
                                height={350}
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                    </div>
                    <div>
                        <Button url="https://www.yehuda.com/educational-videos/" primary>
                            REGISTER YOUR INTEREST FOR INFORMATION
                        </Button>
                    </div>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/1112931588?h=5289266250" width="640" frameBorder="0" allowFullScreen className='mt-8 lg:mt-16 w-full h-[250px] lg:h-[650]'></iframe>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 Start */}

            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    <div className='flex flex-col lg:flex-row gap-8'>


                        <VideoCard
                            title="DR. WATSON up to 8 rings at a time"
                            imageUrl="/assets/images/Watson-2025.687.png"
                            price="£2,395"
                            buttonText="CONTACT US FOR MORE INFORMATION"
                            buttonUrl={pages.CONTACT}
                            vimeoVideoUrl="https://player.vimeo.com/video/861318810?h=d994d6a251"
                        >
                            <ul className="list-disc list-inside marker:text-gray-400 body-text font-light">
                                <li>Uses the same 100% detection rate technology as the Sherlock Holmes 2.0</li>
                                <li>Checks up to 8 rings at a time</li>
                                <li>Approximately 50 CT loose diamonds</li>
                                <li>Visible checking area is 1.5” by 2.5” (4.5 cm by 5 cm)</li>
                                <li>Checking area height 1.5” (4 cm)</li>
                                <li>Add &amp; delete users</li>
                                <li>Store your results to the cloud</li>
                                <li>Add pictures, certificates, SKU, names, etc. and upload the result to the cloud</li>
                                <li>Add more storage if necessary for a fee</li>
                                <li>Only $10/month subscription fee (includes storage for about 1,000 tests)</li>
                                <li>Delete or move your test results to your own cloud</li>
                                <li>Friendly back office where you can retrieve your test results and easily compare them to former tests</li>
                                <li>One-year full warranty</li>
                            </ul>
                        </VideoCard>


                        <VideoCard
                            title="SHERLOCK 4.0 up to 27 rings at a time"
                            imageUrl="/assets/images/Sherlok-2025-open-1.png"
                            price="£5,795"
                            buttonText="CONTACT US FOR MORE INFORMATION"
                            buttonUrl={pages.CONTACT}
                            vimeoVideoUrl="https://player.vimeo.com/video/861316322?h=d3050196b5"
                        >
                            <ul className="list-disc list-inside marker:text-gray-400 body-text font-light">
                                <li>Uses the same 100% detection rate technology as the Sherlock Holmes 2.0</li>
                                <li>Checks up to 27 rings at a time or 20 rings on 2 rotating finger ring holders</li>
                                <li>Approximately 250 CT loose diamonds</li>
                                <li>Visible checking area is 4” by 6” (10 cm by 15 cm)</li>
                                <li>Checking area height 2” (5 cm)</li>
                                <li>Add &amp; delete users</li>
                                <li>Store your results to the cloud</li>
                                <li>Add pictures, certificates, SKU, names, etc. and upload the result to the cloud</li>
                                <li>Only $10/month subscription fee (includes storage for about 1,000 tests)</li>
                                <li>Delete or move your test results to your own cloud</li>
                                <li>Friendly back office where you can retrieve your test results and easily compare them to former tests</li>
                                <li>One-year full warranty</li>
                            </ul>
                        </VideoCard>


                        <VideoCard
                            title="BIG SHERLOCK up to 108 rings at a time"
                            imageUrl="/assets/images/yehunda3-video.png"
                            price="£16,275"
                            buttonText="CONTACT US FOR MORE INFORMATION"
                            buttonUrl={pages.CONTACT}
                            vimeoVideoUrl="https://player.vimeo.com/video/861313895?h=1d38db481e"
                        >
                            <ul className="list-disc list-inside marker:text-gray-400 body-text font-light">
                                <li>Uses the same 100% detection rate technology as the Sherlock Holmes 2.0</li>
                                <li>Checks up to 108 rings at a time or 60 rings on 5 rotating finger ring holders</li>
                                <li>Approximately 1000 CT loose diamonds</li>
                                <li>Visible checking area is 8” by 11” (20 cm by 30 cm)</li>
                                <li>Checking area height 4” (10 cm)</li>
                                <li>Add &amp; delete users</li>
                                <li>Store your results to the cloud</li>
                                <li>Add pictures, certificates, SKU, names, etc. and upload the result to the cloud</li>
                                <li>Add more storage if necessary for a fee</li>
                                <li>Only $10/month subscription fee (includes storage for about 1,000 tests)</li>
                                <li>Delete or move your test results to your own cloud</li>
                                <li>Friendly back office where you can retrieve your test results and easily compare them to former tests</li>
                                <li>One-year full warranty</li>
                            </ul>
                        </VideoCard>
                    </div>

                </div>
            </div>
            {/* Section 3 End */}

            {/* Section 4 Start */}
            <div className='bg-white dark:bg-gray-900 pb-20 lg:pb-36 pt-0'>
                <div className='container flex flex-col gap-10'>
                    <hr className="border-primary" />
                    <div className='text-center lg:text-left'>
                        <h2 className="hero-title text-primary">What’s New</h2>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-8'>
                        {whatsNew.map(({ id, title, description, icon }) => (

                            <IconBox key={id} title={title} description={description} icon={icon} />
                        ))}
                    </div>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='flex-1'>
                            <Button url="https://apps.apple.com/ro/app/sherlock-holmes-detect/id1617998548?l=ro" primary otherClasses="text-[13px]">
                                DOWNLOAD YEHUDA APP ON APPSTORE
                            </Button>
                        </div>
                        <div className='flex-1'>
                            <Button url="https://play.google.com/store/apps/details?id=com.yehudaapp&gl=RO&pli=1" primary otherClasses="text-[13px]">
                                DOWNLOAD YEHUDA APP ON GOOGLE PLAY
                            </Button>
                        </div>
                    </div>
                    <div className='lg:flex items-center justify-center pt-0'>
                        <Button url="https://www.yehuda.com/educational-videos/" primary otherClasses="uppercase" >
                            YEHUDA Educational Videos / User Manuals
                        </Button>
                    </div>
                </div>
            </div>
            {/* Section 4 End */}
        </div>
    )
}

export default page