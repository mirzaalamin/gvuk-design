'use client'

import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'next-themes'

const LogoCarousel = () => {
    const { theme } = useTheme()

    const gradientColor = theme === 'dark' ? '#111827' : '#ffffff'

    return (
        <div className='logos'>
            <div className='logos-slider'>
                <Marquee pauseOnHover gradient gradientColor={gradientColor} gradientWidth={150} style={{ width: 1180 }}>
                    <Link href="https://www.gvukdesign.co.uk/3d-printers/3d-printers-for-jewellers/">
                        <Image
                            src="/assets/images/BOFA-logo.png"
                            alt='Bofa logo'
                            height={80}
                            width={120}
                            className='m-10 dark:invert'
                        />
                    </Link>
                    <Image src="/assets/images/Countersketch-Logo.png" alt='Countersketch' height={80} width={120} className='m-10 dark:invert' />
                    <Image src="/assets/images/Desktop-Health-Logo.png" alt='Desktop Health' height={80} width={120} className='m-10 dark:invert' />
                    <Image src="/assets/images/Gemvision-Logo-1.png" alt='Gemvision' height={80} width={120} className='m-10 dark:invert' />
                    <Image src="/assets/images/Improbond-Logo.png" alt='Improbond' height={80} width={120} className='m-10 dark:invert' />
                    <Image src="/assets/images/LaserStar_logo_Red-1200px.png" alt='LaserStar' height={80} width={120} className='m-10 dark:invert' />
                    <Image src="/assets/images/MatrixGold-Logo.png" alt='MatrixGold' height={80} width={120} className='m-10 dark:invert' />
                    <Image src="/assets/images/yehuda-logo.png" alt='Yehuda' height={80} width={70} className='m-10 dark:invert' />
                    <Image src="/assets/images/Thunk-3D-Logo.png" alt='Thunk 3D' height={80} width={120} className='m-10 dark:invert' />
                </Marquee>
            </div>
        </div>
    )
}

export default LogoCarousel
