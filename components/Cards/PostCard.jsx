import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const PostCard = ({ id, title, description, imageUrl, logoUrl, url, hideLogo, otherClasses, buttonText = "View Section" }) => {
    return (
        <div className="flex flex-col  items-center justify-center lg:flex-row gap-10 border-t-2 border-primary dark:bg-gray-800 primary-gradient px-8 py-12">
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-5">
                    {(logoUrl && !hideLogo) && (
                        <Image
                            src={logoUrl}
                            alt='Logo'
                            quality={100}
                            width={150}
                            height={150}
                            className="w-[150px] dark:invert"
                        />
                    )}
                    <h2 className="h3 text-primary">{title}</h2>
                    <p className="post-description font-light" dangerouslySetInnerHTML={{ __html: description }}></p>
                    <Button primary url={url} otherClasses="uppercase text-[13px]">
                        {buttonText}
                    </Button>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <Image

                    src={imageUrl}
                    alt='Engineering'
                    quality={100}
                    width={100}
                    height={150}
                    className={`w-full lg:w-[400px] h-[200px] object-contain ${otherClasses}`}
                    sizes="(max-width: 768px) 100vw, 150px"
                />
            </div>
        </div>
    )
}

export default PostCard