

import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { LaserWeldersForTheMedicalIndustry, pages } from '@/contant/constant'
import { getProductsByCategory } from '@/lib/actions/actions'

export const metadata = {
    title: "Laser Welders for the Medical Industry | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/medical/laser-welders-for-the-medical-industry",
    },
    openGraph: {
        title: "Laser Welders for the Medical Industry | GVUK Design",
        url: "https://www.gvukdesign.co.uk/medical/laser-welders-for-the-medical-industry",
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

    const products = await getProductsByCategory(60)

    console.log(products)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 mt-[85px] lg:mt-[110px] !border-t-2 !border-primary'>
                <div className="container">
                    <Hero title="Laser Welders for the Medical Industry" description="Precise laser welding with microdot and presets for ease-of-use on all medical alloys."
                        imgUrl="/assets/images/iWeld-993-Web-Ready-1.png"
                        titleColor="text-primary"
                        descriptionColor="text-[#444444]"
                        logoUrl="/assets/images/LaserStar_Logo_Red-1200px.png"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1'>
                        <div className='flex flex-col gap-10 mt-12'>
                            {products.map((product) => (
                                <PostCard {...product} key={product.id} buttonText="View Laser" />
                            ))}
                        </div>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <h2 className="h3 text-primary">LaserStar News</h2>
                        <div className='flex flex-col gap-10'>
                            {LaserWeldersForTheMedicalIndustry.map((post) => (
                                <RecentPostCard {...post} key={post.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page