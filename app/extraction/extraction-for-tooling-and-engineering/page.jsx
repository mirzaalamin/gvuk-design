

import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { laserStars, pages } from '@/contant/constant'
import { getProductsByCategory } from '@/lib/actions/actions'


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

    const products = await getProductsByCategory(59)

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 mt-[85px] lg:mt-[110px] !border-t-2 !border-primary'>
                <div className="container">
                    <Hero title="Fume & Dust Extraction for Tooling & Engineering" description="BOFA International are the market leader in the fume extraction industry. They have gained global recognition for the design and manufacture of their innovative and powerful fume extraction systems, suitable for the Tooling & Engineering industries."
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

                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>Dust, harmful fumes and lemel reclamation are a real challenge for every workshop. We all want to capture precious metals however we also need clean lunges and have a duty of care to the team.</p>
                        <br />
                        <p className='font-openSans text-[14px] text-[#444444] dark:text-white leading-6'>BOFA, based in Poole, Dorset, manufactures solutions to capture these harmful particulates with a 99.997% filtration system. Talk to GVUK about cost-effective solutions for your business</p>

                        <Button primary url={pages.CONTACT} otherClasses="uppercase text-[13px] mt-12">
                            Contact us for more information
                        </Button>

                        <div className='flex flex-col gap-10 mt-12'>
                            {products.map((product) => (
                                <PostCard {...product} key={product.id} buttonText="View Product" hideLogo />
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