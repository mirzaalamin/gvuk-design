import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const Panel = ({ panel }) => {
    const { id, logoUrl, title, button_text, imageUrl, content, button_url } = panel
    return (
        <div key={id} className="flex flex-col  items-center justify-center lg:flex-row gap-10 border-t-2 border-primary dark:bg-gray-800 primary-gradient px-8 py-12">
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-2">
                    {logoUrl && (
                        <div className="flex flex-wrap gap-2">
                            <Image
                                src={logoUrl}
                                alt='Logo'
                                quality={100}
                                width={100}
                                height={100}
                                className="w-[120px] h-[60px] object-contain dark:invert"
                            />
                        </div>
                    )}
                    {title && (
                        <h2 className="h3 text-primary" dangerouslySetInnerHTML={{ __html: title }}></h2>
                    )}
                    <p className="post-description font-light" dangerouslySetInnerHTML={{ __html: content }}></p>
                    <Button primary url={button_url} otherClasses="uppercase text-[13px] font-medim">
                        {button_text}
                    </Button>
                </div>
            </div>
            <div className="flex-1">
                <Image

                    src={imageUrl}
                    alt={title}
                    quality={100}
                    width={100}
                    height={150}
                    className="w-full h-[300px] object-contain"
                    sizes="(max-width: 768px) 100vw, 150px"
                />
            </div>
        </div>
    )
}

export default Panel