import React from 'react'
import Button from '../Button'
import Link from 'next/link'


const HeroCard = ({ title, subtitle, buttonText, buttonUrl, otherClasses }) => {
    return (
        <div className={`bg-center bg-cover flex flex-col items-center justify-between h-[300px] lg:h-[500px] py-8 ${otherClasses}`}>
            <div className='flex flex-col items-center text-white'>
                <h2 className='h1'>{title}</h2>
                <h4 className='subTitle'>{subtitle}</h4>
            </div>
            <Button url={buttonUrl} otherClasses="bg-gray-200/50 text-[12px] text-primary">
                {buttonText}
            </Button>

        </div>
    )
}

export default HeroCard