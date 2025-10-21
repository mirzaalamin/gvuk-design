

import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { laserStars } from '@/contant/constant'
import { getPostsByCategory, getProductsByCategory } from '@/lib/actions/actions'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'



export const metadata = {
    title: "Laser Welders for Jewellers | GVUK Design",
    description:
        "Your Gemvision, EnvisionTEC and Coherent–Rofin specialist distributor for the UK and Ireland",
    alternates: {
        canonical: "https://www.gvukdesign.co.uk/lasers/laser-welders-for-jewellers",
    },
    openGraph: {
        title: "Laser Welders for Jewellers | GVUK Design",
        url: "https://www.gvukdesign.co.uk/lasers/laser-welders-for-jewellers",
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

    const products = await getProductsByCategory(58)


    const trainingNews = await getPostsByCategory(15, 2)

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 mt-[85px] lg:mt-[110px] !border-t-2 !border-primary'>
                <div className="container">
                    <Hero title="Laser Welders for Jewellers" description="Precision lasers for high-performance welding on precious and non-precious metals. Now with optional expert training modules with LaserStar Education. Optional service and maintenance plan or DIY with tutorial help guide."
                        imgUrl="/assets/images/iweld-993.png"
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

                        <div className='flex flex-col gap-10'>
                            {products.map((product) => (
                                <PostCard {...product} key={product.id} />
                            ))}
                        </div>
                    </div>
                    {/* <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <h2 className="h3 text-primary">LaserStar News</h2>
                        <div className='flex flex-col gap-10'>
                            {laserStars.map((post) => (
                                <RecentPostCard {...post} key={post.id} />
                            ))}
                        </div>
                    </div> */}
                    <div className="shrink-0 lg:w-[300px] flex flex-col p-5 gap-5 bg-[#F0F0F0]">
                        <h2 className="h3 text-primary">Jewellery News</h2>
                        <div className='flex flex-col gap-10'>
                            {trainingNews.map(({ id, title, excerpt, date, thumbnail, url }) => (

                                <div className="flex flex-col gap-5 dark:bg-gray-800 px-0 py-2" key={id}>
                                    <div className="flex-1">
                                        <Link href={`/news/${url}`}>
                                            <Image

                                                src={thumbnail}
                                                alt='Engineering'
                                                quality={100}
                                                width={800}
                                                height={350}
                                                sizes="(max-width: 768px) 100vw, 800px"
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-5 items-center justify-center px-4">
                                        <div className="flex flex-col gap-3">
                                            <Link href={`/news/${url}`}>
                                                <h2 className="h3 !text-[20px] text-primary">{title}</h2>
                                            </Link>
                                            <p className="post-description font-[600] !leading-6">{formatDate(date)}</p>
                                            <div className="post-description font-medium  !leading-6 line-clamp-6" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                                        </div>
                                    </div>

                                </div>
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