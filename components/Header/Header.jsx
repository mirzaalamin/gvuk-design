import React from 'react'
import NavBar from './NavBar'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { ModeToggle } from './Theme'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 fixed w-full top-0 z-10">
      <div className='container flex justify-between m-auto header py-5'>
        <div>
          <Link href="/">
            <Image
              src="/assets/images/GVUK-Logo.svg"
              alt='Logo'
              height={40}
              width={90}
              quality={92}
              className="lg:w-[150px]"
            />
          </Link>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <NavBar />
          <MobileNav />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header