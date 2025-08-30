

import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { LaserWeldersForTheMedicalIndustry, pages } from '@/contant/constant'
import { getProductsByCategory } from '@/lib/actions/actions'


const page = async () => {

    const products = await getProductsByCategory(63)

    console.log(products)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Laser Marking & Engraving for Industry" description="LaserStar engraving and cutting brings unlimited opportunities for marking most materials with professional marking, both 2D and 3D. In-house software with full training package."
                        imgUrl="/assets/images/engineering.png"
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