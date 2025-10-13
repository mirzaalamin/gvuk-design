import Panel from '@/components/Cards/Panel'
import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { getPanelsByCategory } from '@/lib/actions/actions'
import React from 'react'


export const metadata = {
    title: "Laser Welding, Marking & Engraving for Jewellers | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/lasers/laser-cutting-engraving",
    },
    openGraph: {
        title: "Laser Welding, Marking & Engraving for Jewellers | GVUK Design",
        url: "https://www.gvukdesign.co.uk/lasers/laser-cutting-engraving",
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
    const panels = await getPanelsByCategory(70)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 mt-[85px] lg:mt-[110px] !border-t-2 !border-primary'>
                <div className="container">
                    <Hero title="Laser Welding, Marking &  Engraving for Jewellers" description="Precision quality YAG and Fiber laser welders and engravers for all your jewellery and watch repairs, from welding platinum to silver and stainless steel. \n 3D laser engraving includes a brilliant in-house designed and built integrated software program along with a detailed on-line training package. "
                        imgUrl="/assets/images/laserstar-marking.png"
                        titleColor="text-primary"
                        descriptionColor="text-[#444444]"
                        logoUrl="/assets/images/LaserStar_Logo_Red-1200px.png"
                        logoInvert
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 pb-0 pt-16'>
                <div className='container flex flex-col gap-10'>
                    <p className='text-[17px] text-[#444444] dark:text-white font-light font-openSans'>Step-by-step on-line training and presets ensure you will master the art of laser engraving and welding in days, not months</p>
                </div>
            </div>
            {/* Section 2 End */}

            {/* Section 3 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {panels.reverse().map((panel) => (
                        <Panel panel={panel} key={panel.id} />
                    ))}
                </div>
            </div>
            {/* Section 3 End */}
        </div>
    )
}

export default page