

import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { laserStars, pages } from '@/contant/constant'
import { getProductsByCategory } from '@/lib/actions/actions'


export const metadata = {
    title: "Extraction for Jewellers | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/extraction/extraction-for-jewellers",
    },
    openGraph: {
        title: "Extraction for Jewellers | GVUK Design",
        url: "https://www.gvukdesign.co.uk/extraction/extraction-for-jewellers",
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

    const products = await getProductsByCategory(59)

    console.log(products)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Fume & Dust Extraction for Jewellers" description="BOFA International are the market leader in the fume extraction industry. They have gained global recognition for the design and manufacture of their innovative and powerful fume extraction systems, suitable for the Jewellery industry."
                        imgUrl="/assets/images/bofa-jewellery.png"
                        titleColor="text-primary"
                        descriptionColor="text-[#444444]"
                        logoUrl="/assets/images/BOFA-Logo.png"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1'>

                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Watch how easy it is to engrave text and images onto rings using the LaserStar ring module. This video showcases the powerful capabilities of the LaserStar software—perfect for jewellers and engraving professionals looking for accuracy, speed, and creative flexibility.</p>

                        <Button primary url={pages.CONTACT} otherClasses="uppercase text-[13px] mt-12">
                            Contact us for more information
                        </Button>

                        <div className='flex flex-col gap-10 mt-12'>
                            {products.map((product) => (
                                <PostCard {...product} key={product.id} buttonText="View Product" />
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