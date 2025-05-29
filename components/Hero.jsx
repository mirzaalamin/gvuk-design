import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Hero = ({ title, description, imgUrl, titleColor, descriptionColor }) => {
    return (
        <div className="flex flex-col lg:flex-row py-8 lg:py-0 gap-10">
            <div className="flex flex-1 flex-collg:pt-0 gap-5 items-center justify-center">
                <div className="flex flex-col gap-5">
                    <h2 className={`hero-title ${titleColor} dark:text-primary`}>{title}</h2>
                    <p className={`body-text font-light ${descriptionColor}`}>{description}</p>
                </div>
            </div>
            <div className="flex-1 hero-gradient">
                <Image
                    src={imgUrl}
                    alt='Laser star'
                    quality={100}
                    width={800}
                    height={350}
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>
        </div>
    )
}

export default Hero