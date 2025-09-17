import Button from '@/components/Button';
import Panel from '@/components/Cards/Panel'
import Hero from '@/components/Hero'
import { getPanelsByCategory } from '@/lib/actions/actions'
import Image from 'next/image';
import React from 'react'

export const metadata = {
    title: "Consumables | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/consumables/",
    },
    openGraph: {
        title: "Consumables | GVUK Design",
        url: "https://www.gvukdesign.co.uk/consumables/",
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
    const panels = await getPanelsByCategory(73)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero title="Consumables"
                        description="From industry leading DLP resins from EnvisionTEC, Loctite and Somos to high grade laser wires from Improbond, you know you will have the finest materials for your work."
                        imgUrl="/assets/images/Consumables-1.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {panels.map(({ id, logoUrl, title, button_text, imageUrl, content, button_url }) => (
                        <div key={id} className="flex flex-col  items-center justify-center lg:flex-row lg:gap-16 border-t-2 border-primary dark:bg-gray-800 primary-gradient px-8 py-12">
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
                                                className="w-[120px] h-[60px] object-contain dark:invert"
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
                                    className="w-full lg:h-full object-contain"
                                    sizes="(max-width: 768px) 100vw, 150px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Section 2 End */}



        </div>
    )
}

export default page