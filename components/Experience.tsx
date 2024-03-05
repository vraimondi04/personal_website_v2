import React from 'react'
import Image from 'next/image'
import Test from '@/public/medias/Art-Frame.svg'
import { a } from '@react-spring/web'

export default function Experience({ darkMode }: any) {
  
  return (
    <div className='flex flex-1 flex-col pointer-events-none justify-center items-center'>
      <div className='font-bold text-5xl font-serif'>
        <p className={darkMode === true ? "text-[#f0f0f0]" : "text-[#202020]"}>SDE I @ <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-yellow-500'>The UPS Store</span></p>
        {/* <p className={darkMode === true ? "text-[#f0f0f0]" : "text-[#202020]"}>Software Dev + <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-blue-500'>Wizard</span></p> */}
      </div>

      <div className='rounded-md bg-slate-500 w-4/5 m-4'>
        <Image src={Test} alt='Test Photo'></Image>
      </div>
      
    </div>

  )
}