import Panel from '@/components/Cards/Panel'
import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { jewelleryIndustry } from '@/contant/constant'
import { getPanelsByCategory } from '@/lib/actions/actions'
import React from 'react'

export const metadata = {
    title: "Jewellery | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/industry-solutions/laser-mark-ing-engraving-for-industry",
    },
    openGraph: {
        title: "Jewellery | GVUK Design",
        url: "https://www.gvukdesign.co.uk/industry-solutions/laser-mark-ing-engraving-for-industry",
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
    const panels = await getPanelsByCategory(69)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Jewellery Industry" description="One-shop-stop for all the latest in technology for jewellers with professional training, support, and servicing to ensure you are offering your clients the very best experience and value for money. It’s a competitive world, with the right tools we can all compete."
                        imgUrl="/assets/images/jewellery.svg"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {panels.reverse().map((panel) => (
                        <Panel panel={panel} key={panel.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page