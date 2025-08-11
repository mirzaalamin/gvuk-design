import Image from 'next/image'
import React from 'react'

const IconBox = ({ icon, title, description }) => {
    return (
        <div className='primary-gradient-reverse flex flex-col items-center justify-center p-8 text-center'>
            <Image src={icon} alt='detectors' height={150} width={150} />
            <h3 className='body-text !text-[#444444] dark:!text-white font-medium'>{title}</h3>
            <p className='body-text !text-[14px]'>{description}</p>
        </div>
    )
}

export default IconBox