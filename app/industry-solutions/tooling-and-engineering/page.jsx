import Panel from '@/components/Cards/Panel'
import Hero from '@/components/Hero'
import { getPanelsByCategory } from '@/lib/actions/actions'
import React from 'react'

export const metadata = {
    title: "Tooling & Engineering | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/industry-solutions/tooling-and-engineering/",
    },
    openGraph: {
        title: "Tooling & Engineering | GVUK Design",
        url: "https://www.gvukdesign.co.uk/industry-solutions/tooling-and-engineering/",
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
    const panels = await getPanelsByCategory(67)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Performance laser solutions" description="Precise and fast laser welding and marking with optional CNC applications, available as stand-alone or production line integration options."
                        imgUrl="/assets/images/gvuk_industrial.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                        otherClasses="!h-full !object-cover"
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