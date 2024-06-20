import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full">
        <div className='wrapper flex justify-between items-center'>
            <Image 
            src="/assets/images/logo1.png"
            width={200}
            height={200}
            alt='logo'
            />

            <p className='p-14-medium'>Copyright © Kelompok 7 - 2024</p>
        </div>
      
    </footer>
  )
}

export default Footer
