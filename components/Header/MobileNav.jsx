"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { navItems } from '@/contant/constant'
import Link from 'next/link'



const MobileNav = () => {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/assets/icons/menu-black.svg"
                        alt='menu icon'
                        height={24}
                        width={24}
                        className="cursor-pointer dark:invert"
                    />
                </SheetTrigger>
                <SheetContent className="bg-white dark:bg-gray-900 border-none">


                    <div className='h-full items-center justify-center flex'>
                        <ul className='flex flex-col gap-4 items-center justify-center'>
                            {navItems.map((item) => {
                                if (item.subItem.length > 0) {
                                    return (
                                        <li className='text-2xl hover:text-primary dark:text-white' key={item.name}>
                                            <SheetClose asChild>
                                                <Link href={item.url}>
                                                    {item.name}
                                                </Link>
                                            </SheetClose>
                                        </li>
                                    )
                                } else {

                                    return (
                                        <li className='text-2xl hover:text-primary dark:text-white' key={item.name}>
                                            <SheetClose asChild>
                                                <Link href={item.url}>
                                                    {item.name}
                                                </Link>
                                            </SheetClose>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

    )
}

export default MobileNav