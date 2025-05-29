"use client"

import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navItems } from '@/contant/constant'


const NavBar = () => {
    return (
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-5">
                {navItems.map((item) => {
                    if (item.subItem.length > 0) {
                        return (
                            <NavigationMenuItem key={item.name} className='dark:text-white'>
                                <NavigationMenuTrigger className="dark:hover:text-black">
                                    <Link href={item.url} className="uppercase text-[14px]">{item.name}
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white dark:bg-dark dark:text-white">
                                    <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[250px] lg:grid-cols-1 inset-shadow-xs">
                                        {item.subItem.map((subItem) => (
                                            <li className="uppercase text-[14px]" key={subItem.name}>

                                                <NavigationMenuLink href={subItem.url} className="uppercase text-[14px]">
                                                    {subItem.name}
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    } else {
                        return (
                            <NavigationMenuItem key={item.name} className='dark:text-white'>

                                <Link href={item.url} className="uppercase text-[14px]">
                                    {item.name}
                                </Link>
                            </NavigationMenuItem>
                        )
                    }
                })}
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default NavBar