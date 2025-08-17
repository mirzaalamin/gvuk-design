import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { pages } from '@/contant/constant'

const SingleProduct = ({ content, imageUrl, logoUrl, sheetEditionUrl, sheetUrl }) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-10 dark:bg-gray-800 py-12">
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
                    <p className="post-description" dangerouslySetInnerHTML={{ __html: content }} ></p>
                    <Button primary url={sheetUrl} otherClasses="bg-[#8C8C8C] text-[13px]">
                        DOWNLOAD DATA SHEET
                    </Button>
                    <Button primary url={pages.CONTACT} otherClasses="text-[13px]">
                        CONTACT US FOR MORE INFORMATION
                    </Button>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <Image

                    src={imageUrl}
                    alt='Engineering'
                    quality={100}
                    width={100}
                    height={150}
                    sizes="(max-width: 768px) 100vw, 100px"
                    className='w-full lg:w-[400px]'
                />
            </div>
        </div>
    )
}

export default SingleProduct