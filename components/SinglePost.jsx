import Image from 'next/image'
import React from 'react'
import Button from './Button'

const SinglePost = ({ id, title, description, imageUrl, logoUrl, url }) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-10 border-t-2 border-primary dark:bg-gray-800 primary-gradient px-8 py-12">
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-5">
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
                    <p className="post-description">{description}</p>
                    <Button primary url="#" otherClasses="bg-[#8C8C8C]">
                        DOWNLOAD DATA SHEET
                    </Button>
                    <Button primary url="#">
                        CONTACT US FOR MORE INFORMATION
                    </Button>
                </div>
            </div>
            <div className="flex-1">
                <Image

                    src={imageUrl}
                    alt='Engineering'
                    quality={100}
                    width={800}
                    height={350}
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>
        </div>
    )
}

export default SinglePost