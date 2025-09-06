

import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { laserStars } from '@/contant/constant'
import { getProductsByCategory } from '@/lib/actions/actions'


export const metadata = {
    title: "Laser Marking and Engraving for Jewellers | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/laser-marking-and-engraving-for-jewellers",
    },
    openGraph: {
        title: "Laser Marking and Engraving for Jewellers | GVUK Design",
        url: "https://www.gvukdesign.co.uk/laser-marking-and-engraving-for-jewellers",
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

    const products = await getProductsByCategory(57)

    console.log(products)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Laser Marking and Engraving for Jewellers" description="Precision laser welding and engraving with LaserStar and Coherent. Full training and support to ensure you maximise your ROI. Full UK training and support provided."
                        imgUrl="/assets/images/Laser-welding.png"
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
                    <div className='flex flex-col flex-1 gap-6'>
                        <h2 className="hero-title text-primary">Precision ring engraving with LaserStar software</h2>
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Watch how easy it is to engrave text and images onto rings using the LaserStar ring module. This video showcases the powerful capabilities of the LaserStar software—perfect for jewellers and engraving professionals looking for accuracy, speed, and creative flexibility.</p>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1066990443?h=ad373a094a" width="640" height="450" frameBorder="0" allowFullScreen className='w-full'></iframe>
                        <div>
                            <h5 className='mb-5'>Explore the future of ring engraving</h5> <p className='text-[14px] text-[#444444] dark:text-white leading-6'>-Personalise rings with names, messages, or logos</p> <p className='text-[14px] text-[#444444] dark:text-white leading-6'>-See the full process from setup to final result</p> <p className='text-[14px] text-[#444444] dark:text-white leading-6'>-Ideal for custom jewellery and retail applications</p>
                        </div>
                        <div className='flex flex-col gap-10 mt-12'>
                            {products.map((product) => (
                                <PostCard {...product} key={product.id} />
                            ))}
                        </div>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <h2 className="h3 text-primary">LaserStar News</h2>
                        <div className='flex flex-col gap-10'>
                            {laserStars.map((post) => (
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