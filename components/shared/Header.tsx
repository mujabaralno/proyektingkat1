'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { nevLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Header = () => {
    const pathname = usePathname();
  return (
    <header className='w-full relative border-b'>
        <div className='wrapper flex flex-row items-center justify-between'>
            <Link href="/">
                <Image 
                src="/assets/images/logo1.png"
                width={200}
                height={100}
                alt='logo'
                />
            </Link>
            <div className='w-32 justify-end flex'>
                <Button className='buttonPrimary py-6 '>
                    <Link href="/sign-in">
                        Login
                    </Link>
                </Button>
            </div>
        </div>
    </header>
  )
}

export default Header
