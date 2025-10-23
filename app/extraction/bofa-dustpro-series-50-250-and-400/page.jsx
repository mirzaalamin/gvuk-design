

import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import HeroSingleProduct from '@/components/HeroSingleProduct'
import { laserStars, pages } from '@/contant/constant'
import { getProductsByCategory } from '@/lib/actions/actions'
import Image from 'next/image'


export const metadata = {
    title: "Extraction for Tooling & Engineering | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/extraction/extraction-for-tooling-and-engineering",
    },
    openGraph: {
        title: "Extraction for Tooling & Engineering | GVUK Design",
        url: "https://www.gvukdesign.co.uk/extraction/extraction-for-tooling-and-engineering",
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

    const products = await getProductsByCategory(74)

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <HeroSingleProduct title="BOFA DustPro Series 50, 250 and 400" description=""
                        titleColor="text-primary"
                        descriptionColor="text-[#444444]"
                        logoUrl="/assets/images/BOFA-Logo.png"
                        logoInvert
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>

                    <div className='flex flex-col gap-10'>
                        {products.map((product) => {
                            const { id, title, description, imageUrl, logoUrl, sheetUrl, url, hideLogo, buttonText = "View Section" } = product;
                            return (
                                <div className="flex flex-col items-center justify-center lg:flex-row gap-10 dark:bg-gray-800 px-8">
                                    <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                                        <div className="flex flex-col gap-5">
                                            {(logoUrl && !hideLogo) && (
                                                <Image
                                                    src={logoUrl}
                                                    alt='Logo'
                                                    quality={100}
                                                    width={150}
                                                    height={150}
                                                    className="w-[150px] dark:invert"
                                                />
                                            )}
                                            <h2 className="text-[32px] font-openSans font-light text-primary">{title}</h2>
                                            <p className="post-description font-medium" dangerouslySetInnerHTML={{ __html: description }}></p>
                                            {sheetUrl && (
                                                <Button primary url={sheetUrl} otherClasses="bg-[#8C8C8C] text-[13px]">
                                                    DOWNLOAD DATA SHEET
                                                </Button>
                                            )}
                                            <Button primary url={pages.CONTACT} otherClasses="text-[13px]">
                                                CONTACT US FOR MORE INFORMATION
                                            </Button>
                                            {/* <hr className="h-[3px] mt-8 bg-primary" /> */}
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center">
                                        <Image

                                            src={imageUrl}
                                            alt='Engineering'
                                            quality={100}
                                            width={100}
                                            height={150}
                                            className="w-full lg:w-[400px] h-[350px] object-contain"
                                            sizes="(max-width: 768px) 100vw, 150px"
                                        />
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page