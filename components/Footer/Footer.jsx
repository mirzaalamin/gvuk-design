import { socialItems } from '@/contant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const Footer = () => {
    return (
        <footer className=' flex bg-gray-200 dark:bg-gray-800 footer !py-16'>
            <div className='container grid lg:grid-cols-4 gap-10'>
                {/* Column 1 start */}
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h4 className='h5 text-primary'>Contact Us</h4>
                        <p className='footer-text'>
                            GVUK Design
                            Suite 2C, The Leys
                            Leyton Road
                            Harpenden
                            Hertfordshire
                            AL5 2TL
                        </p>
                        <div>
                            <p className='footer-text'>T: 01582 727 971</p>
                            <p className='footer-text'>E: info@gvukdesign.co.uk</p>
                            <p className='footer-text'>E: support@gvukdesign.co.uk</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        {socialItems.map((item) => (
                            <Link href={item.url} key={item.name}>
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    height={28}
                                    width={28}
                                />
                            </Link>
                        ))}
                    </div>
                    <div>
                        <p className='footer-text'>
                            We are open Monday – Friday 9am – 5pm, closed Bank and public holidays.</p>
                    </div>
                </div>
                {/* Column 1 end */}


                {/* Column 2 start */}
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='h5 text-primary'>Accreditations</h4>
                        <div className='flex gap-5'>
                            <Image
                                src="/assets/images/naj-member-logo.png"
                                alt='Naj member logo'
                                height={80}
                                width={80}
                            />
                            <Image
                                src="/assets/images/mta-logo.png"
                                alt='MTA logo'
                                height={80}
                                width={80}
                            />
                            <Image
                                src="/assets/images/cmj-logo.png"
                                alt='CMJ logo'
                                height={80}
                                width={80}
                            />
                        </div>
                        <p className='footer-text'>We are proud to be a member of The
                            National Association of Jewellers, The
                            Manufacturing Technologies Association,
                            Approved Supplier of the CMJ and patron
                            of the Goldsmiths’ Craft & Design Council</p>
                        <div>
                            <p className='footer-text'>www.naj.co.uk</p>
                            <p className='footer-text'>www.masterjewellers.co.uk</p>
                            <p className='footer-text'>www.craftanddesigncouncil.org.uk</p>
                        </div>
                    </div>
                    <div>
                        <p className='footer-text'>
                            We are open Monday – Friday 9am – 5pm, closed Bank and public holidays.</p>
                    </div>
                </div>
                {/* Column 2 end */}


                {/* Column 3 start */}
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='h5 text-primary'>eNewsletter</h4>
                        <p className='footer-text'>
                            Stay up to date with our latest news and activities via our regular GVUK eNewsletter containing the latest news and products from Stuller-Gemvision, EnvisionTEC and Coherent along with special offers and exhibition dates.
                        </p>
                    </div>
                    <div>
                        <Button url="#" primary>
                            Sign up to our newsletter
                        </Button>
                    </div>
                </div>
                {/* Column 3 end */}


                {/* Column 4 start */}
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='h5 text-primary'>Website Information</h4>

                        <div>
                            <p className='footer-text'>Terms & Conditions</p>
                            <p className='footer-text'>Privacy Policy</p>
                            <p className='footer-text'>Cookie Policy</p>
                        </div>
                        <p className='footer-text'>© 2025 GVUK Design Limited
                            All rights reserved</p>
                        <p className='footer-text'>Website by MW Studio</p>
                    </div>
                </div>
                {/* Column 4 end */}
            </div>
        </footer>
    )
}

export default Footer