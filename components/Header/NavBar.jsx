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
                                <NavigationMenuTrigger className="main-menu-parant">
                                    <Link href={item.url} className="uppercase font-openSans text-[11px] ">{item.name}
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-white dark:bg-dark dark:text-white !border-t-2 !border-red-700 sub-menu-section">
                                    <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[250px] lg:grid-cols-1">
                                        {item.subItem.map((subItem) => (
                                            <li className="uppercase font-openSans text-[11px]" key={subItem.name}>

                                                <Link href={subItem.url} className="uppercase font-openSans text-[11px] ">
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    } else {
                        return (
                            <NavigationMenuItem key={item.name} className='dark:text-white'>

                                <Link href={item.url} className="uppercase font-openSans text-[11px]">
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