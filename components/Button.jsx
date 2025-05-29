"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Button = ({ children, url, primary, otherClasses }) => {
    return (

        <Link href={url}>
            <button className={cn(primary && 'btn px-5 py-2 bg-primary hover:bg-dark text-white w-full', `btn px-5 py-2 ${otherClasses}`)}>
                {children}
            </button>

        </Link>
    )
}

export default Button