import Button from '@/components/Button'
import PostCard from '@/components/Cards/PostCard'
import RecentPostCard from '@/components/Cards/RecentPostCard'
import Hero from '@/components/Hero'
import { laserStars } from '@/contant/constant'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <Hero title="Contact us" description="Our GVUK Design team are here to help and advise on the best solution to your requirements, with full training and technical support."
                        titleColor="text-white"
                        descriptionColor="!text-white !font-bold"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col-reverse lg:flex-row-reverse gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9865.880922225213!2d-0.356815!3d51.81584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876385df38ee189%3A0xc1412b97c6f49225!2sGVUK%20Design%20Ltd!5e0!3m2!1sen!2sus!4v1749237276397!5m2!1sen!2sus" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <div className='body-text !text-[14px] !leading-6'>
                            <p>GVUK Design</p>
                            <p>Suite 2C</p>
                            <p>The Leys</p>
                            <p>Leyton Road</p>
                            <p>Harpenden</p>
                            <p>Hertfordshire</p>
                            <p>AL5 2TL</p>
                        </div>
                        <div className='body-text !text-[14px] !leading-6'>
                            <p>T: <a href='tel:01582727971' className='text-primary'>01582 727 971</a></p>
                            <p>E: <a href='mailto:info@gvukdesign.co.uk' className='text-primary'>info@gvukdesign.co.uk</a></p>
                            <p>E: <a href='mailto:support@gvukdesign.co.uk' className='text-primary'>support@gvukdesign.co.uk</a></p>
                        </div>
                        <Button url="https://www.google.co.uk/maps/dir//Leyton+Rd,+Harpenden,+Hertfordshire+AL5+2TL/@51.8156417,-0.358821,17z/data=!4m13!1m4!3m3!1s0x4876385df1237b2d:0x856a94ba80b70c4d!2sLeyton+Rd,+Harpenden,+Hertfordshire+AL5+2TL!3b1!4m7!1m0!1m5!1m1!1s0x4876385df1237b2d:0x856a94ba80b70c4d!2m2!1d-0.3566346!2d51.8157315" primary>
                            GET DIRECTIONS
                        </Button>
                        <p className='body-text !text-[14px] !leading-6'>We are open Monday – Friday 9am – 5pm
                            Closed Bank and public holidays.</p>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}

        </div>
    )
}

export default page