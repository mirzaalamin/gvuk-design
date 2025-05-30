'use client'

import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'next-themes'
import { logos } from '@/contant/constant'

const LogoCarousel = () => {
    const { theme } = useTheme()

    const gradientColor = theme === 'dark' ? '#111827' : '#ffffff'

    return (
        <div className='logos'>
            <div className='logos-slider'>
                <Marquee pauseOnHover gradient gradientColor={gradientColor} gradientWidth={150} style={{ width: 1180 }}>
                    {logos.map((logo) => (
                        <Image key={logo.id} src={logo.logoUrl} alt={logo.name} height={80} width={120} className='m-10 dark:invert' />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default LogoCarousel
