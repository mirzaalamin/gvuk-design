"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { pages } from '@/contant/constant'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SingleProduct = ({ title, content, imageUrl, logoUrl, sheetEditionUrl, sheetUrl, right_side_video }) => {
    const router = useRouter()

    return (

        <div className="flex flex-col-reverse lg:flex-row gap-10  py-12">
            <div className="flex flex-1 flex-col gap-5">
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
                    {sheetUrl && (
                        <Button primary url={sheetUrl} otherClasses="bg-[#8C8C8C] text-[13px]">
                            DOWNLOAD DATA SHEET
                        </Button>
                    )}
                    <Button primary url={pages.CONTACT} otherClasses="text-[13px]">
                        CONTACT US FOR MORE INFORMATION
                    </Button>

                    <Link href="#" onClick={(e) => { e.preventDefault(); router.back(); }} className="text-primary font-medium">
                        {`<< Back`}
                    </Link>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                {imageUrl && (

                    <Image
                        src={imageUrl}
                        alt={title}
                        quality={100}
                        width={100}
                        height={150}
                        sizes="(max-width: 768px) 100vw, 100px"
                        className='w-full lg:w-[400px]'
                    />
                )}
                {right_side_video && (
                    <video src={right_side_video} controls></video>
                )}

            </div>
        </div>
    )
}

export default SingleProduct