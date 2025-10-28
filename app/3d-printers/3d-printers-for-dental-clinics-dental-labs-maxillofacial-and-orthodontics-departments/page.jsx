import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import ImageSlider from '@/components/Carousel/ImageSlider'
import Hero from '@/components/Hero'
import VideoSidebar from '@/components/VideoSidebar'
import { pages } from '@/contant/constant'
import { getProductsByCategory } from '@/lib/actions/actions'
import Image from 'next/image'
import React from 'react'


const sliderImages = [
    {
        id: 1,
        image: "/assets/images/image.jpg"
    },
    {
        id: 2,
        image: "/assets/images/image2.jpg"
    },
    {
        id: 3,
        image: "/assets/images/image3.jpg"
    },
    {
        id: 4,
        image: "/assets/images/image4.jpg"
    },
    {
        id: 5,
        image: "/assets/images/image5.jpg"
    },
    {
        id: 6,
        image: "/assets/images/image6.jpg"
    },
    {
        id: 7,
        image: "/assets/images/image7.jpg"
    },
    {
        id: 8,
        image: "/assets/images/image8.jpg"
    },
    {
        id: 9,
        image: "/assets/images/image9.jpg"
    },
    {
        id: 10,
        image: "/assets/images/image10.jpg"
    },
    {
        id: 11,
        image: "/assets/images/image11.jpg"
    },
    {
        id: 12,
        image: "/assets/images/image12.jpg"
    },
    {
        id: 13,
        image: "/assets/images/image13.jpg"
    },
]


const sideBarVideos = [
    {
        id: 1,
        title: "Dr Walter G Renne",
        description: "",
        videoUrl: "https://player.vimeo.com/video/669786345?h=020d7b2fd7"
    },
    {
        id: 2,
        title: "Jessica Birrel",
        description: "",
        videoUrl: "https://player.vimeo.com/video/669788173?h=39e4e1f5b3"
    },
    {
        id: 3,
        title: "New Flexera dental resin",
        description: "The new Flexera dental resin, 3 x more resistant to fracture and 2 x more resistant to moisture.",
        videoUrl: "https://player.vimeo.com/video/555751940?h=3d9e515259"
    },
    {
        id: 4,
        title: "Dr Ryan Dunlop Endorsement",
        description: "Endorsement from Dr Ryan Dunlop on the new Flexera dental resin and the EnvisionOne 3D printer.",
        videoUrl: "https://player.vimeo.com/video/556115877?h=35a86afc78"
    },
    {
        id: 5,
        title: "Oral Arts Dental Laboratories",
        description: "Oral Arts has been a leader in the dental lab industry for over 45 years. Founded by Thomas Winstead and headquartered in Huntsville, AL, Oral Arts has become one of the most innovative dental labs in North America through its utilisation of additive manufacturing and the Envision One 3D printer from EnvisionTEC.",
        videoUrl: ""
    }
]
const sideBarVideos2 = [
    {
        id: 1,
        title: "Get Faster, More Accurate Parts",
        description: "The Envision One cDLM is a new high-speed 3D printer using a patented technology for faster, more accurate parts. Perfect for a wide variety of 3D printing applications, the Envision One cDLM delivers an end to end solution including design software parameter optimisation which produces parts with minimal supports.",
        videoUrl: "https://player.vimeo.com/video/393954756?h=21194dc003"
    }
]

export const metadata = {
    title: "3D Printers for Dental Clinics, Dental Labs, Maxillofacial & Orthodontics Departments | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/3d-printers/3d-printers-for-dental-clinics-dental-labs-maxillofacial-and-orthodontics-departments",
    },
    openGraph: {
        title: "3D Printers for Dental Clinics, Dental Labs, Maxillofacial & Orthodontics Departments | GVUK Design",
        url: "https://www.gvukdesign.co.uk/3d-printers/3d-printers-for-dental-clinics-dental-labs-maxillofacial-and-orthodontics-departments",
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
    const products = await getProductsByCategory(75)

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 mt-[85px] lg:mt-[110px] !border-t-2 !border-primary'>
                <div className="container">
                    <Hero
                        title="3D Printers for Dental Clinics, Dental Labs, Maxillofacial & Orthodontics Departments"
                        logoUrl="/assets/images/Desktop-Health-Logo.png"
                        description="Professional accuracy and consistency is the key for all dental applications when printing crown and bridges, surgical guides and full dentures, add speed and a wide range of dental resins, EnvisionTEC’s latest 3D printers will deliver perfect models in minutes."
                        imgUrl="/assets/images/3D-printers.png"
                        titleColor="text-primary"

                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Professional accuracy is key for orthodontics when printing bridges, guides and full dentures, add speed and a wide range of dental resins, EnvisionTEC’s latest 3D printers will deliver perfect models in minutes.</p>

                        <b className='text-[14px] font-openSans'>Benefits:</b>
                        <div className='text-[14px] text-[#444444] dark:text-white leading-6'>
                            <p>• High Production of Orthodontic Models for Clear Thermoformed Aligners</p>
                            <p>• Durable Orthodontic Models for Appliance Creation</p>
                            <p>• Indirect Bonding Trays for Bracket Placement</p>
                            <p>• Night Guards and Bite Splints</p>
                            <p>• Highly Accurate Dental and Orthodontic Models</p>
                            <p>• Castable Crowns, Bridges and Partial Denture Frameworks</p>
                            <p>• Direct Crowns and Bridges in choice of shades</p>
                            <p>• Bite Splints or Night Guards</p>
                            <p>• Indirect Bonding Trays</p>
                            <p>• Surgical Drill Guides</p>
                            <p>• Denture Bases and Teeth</p>

                        </div>

                        <Button url={pages.CONTACT} primary otherClasses="text-[13px]">
                            CONTACT US FOR MORE INFORMATION
                        </Button>

                        <div className='flex flex-col gap-10 mt-12'>
                            <ImageSlider images={sliderImages} />
                        </div>
                        <div className='flex flex-col gap-10 mt-12'>
                            {products.map((product) => (
                                <PostCard {...product} key={product.id} hideLogo otherClasses="!h-[300px] !w-[300px]" buttonText='Technical Details' />
                            ))}
                        </div>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <div className='flex flex-col gap-10'>
                            <div className='dark:bg-gray-800 flex flex-col gap-3 px-4 py-6 bg-[#F0F0F0]'>

                                <h2 className="h4 text-primary">Endorsements</h2>
                                <p className="post-description !leading-6">Hear what the customers have to say</p>
                                <div className=''>
                                    {sideBarVideos.map((item) => (
                                        <VideoSidebar {...item} key={item.id} />
                                    ))}
                                </div>
                                <hr className='h-[2px] bg-primary' />
                                <h5 className="h4 !text-[20px] text-primary">See it in action</h5>
                                <p className="post-description !leading-6">13 full sets in 25 minutes, watch this 35 second video</p>
                                <hr className='h-[2px] bg-primary' />
                                <div className='mt-10'>
                                    {sideBarVideos2.map((item) => (
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