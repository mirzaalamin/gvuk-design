import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const FeatureCard = ({ imgUrl, title, buttonText, buttonUrl }) => {
    return (
        <div className="border-t-2 border-primary dark:bg-gray-800 primary-gradient flex flex-col items-center justify-center p-6 gap-10 text-center flex-1">
            <Image
                src={imgUrl}
                alt={title}
                height={400}
                width={280}
            />

            <h3 className='h4 text-primary dark:text-white'>{title}</h3>
            <Button url={buttonUrl} primary>
                {buttonText}
            </Button>
        </div>
    )
}

export default FeatureCard