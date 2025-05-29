import React, { Fragment } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Hero = ({ title, description, imgUrl, titleColor, descriptionColor, logoUrl }) => {
    return (
        <div className="flex flex-col lg:flex-row py-8 lg:py-0 gap-10">
            <div className="flex flex-1 flex-col lg:pt-0 gap-5 justify-center">
                <div className="flex flex-col gap-5 lg:py-[100px]">
                    {logoUrl && (
                        <Image
                            src={logoUrl}
                            alt='Logo'
                            quality={100}
                            width={150}
                            height={150}
                            className="w-[100px] dark:invert"
                        />
                    )}
                    <h2 className={`hero-title ${titleColor} dark:text-primary`}>{title}</h2>
                    <div className={`body-text font-light ${descriptionColor}`} >{description}</div>
                </div>
            </div>
            {imgUrl && (
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
            )}

        </div>
    )
}

export default Hero