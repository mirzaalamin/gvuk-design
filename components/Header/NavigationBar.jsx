"use client"

import React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { navItems } from "@/contant/constant"
import { usePathname } from "next/navigation"



export default function NavigationBar() {
    const pathname = usePathname()
    return (
        <nav className="bg-transparent hidden lg:flex nav-menu">
            <ul className="flex space-x-6 px-6 py-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                        <li key={item.name} className="relative group text-sm tracking-wide uppercase font-openSans text-[11px]">
                            <Link
                                href={item.url}
                                className={`${isActive ? "text-primary dark:text-primary" : "text-gray-800 dark:text-white"} flex items-center gap-1  hover:dark:text-gray-300 uppercase font-openSans text-[11px]`}
                            >
                                {item.name}
                                {item.subItem.length > 0 && (
                                    <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />
                                )}
                            </Link>

                            {/* Submenu */}
                            {item.subItem.length > 0 && (
                                <ul
                                    className="
                  absolute left-0 top-full mt-2 w-56
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 ease-in-out
                  translate-y-2 group-hover:translate-y-0
                  z-10 sub-menu-section !border-t-2 !border-[#9d3189] bg-white"
                                >
                                    {item.subItem.map((sub) => {
                                        const isActive = pathname === sub.url;
                                        return (
                                            <li key={sub.name} className="uppercase font-openSans !text-[11px]">
                                                <Link
                                                    href={sub.url}
                                                    className={`${isActive ? "!text-primary" : "text-gray-800"} block bg-white dark:bg-[#3e4145] px-4 py-4  dark:text-white text-xs hover:bg-gray-100 transition-colors uppercase font-openSans !text-[11px]`}
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
