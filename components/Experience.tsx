import React from 'react'
import Image from 'next/image'
import UPS_Store from '@/public/medias/the_ups_store_logo.jpeg'
import NM from '@/public/medias/northwestern_mutual_logo.jpeg'
import { a } from '@react-spring/web'

export default function Experience({ darkMode }: any) {

  // TODO: For better code readibility, make an object of all of the job info and map through in return
  // TODO: Add Badges / Icons for all of the skills for each Experience
  
  return (
    <div className='flex flex-1 flex-col pointer-events-none justify-center items-center'>
      {/* <div className='font-bold text-5xl font-serif'> */}
        {/* <p className={darkMode === true ? "text-[#f0f0f0]" : "text-[#202020]"}>SDE I @ <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-yellow-500'>The UPS Store</span></p> */}
        {/* <p className={darkMode === true ? "text-[#f0f0f0]" : "text-[#202020]"}>Software Dev + <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-blue-500'>Wizard</span></p> */}
      {/* </div> */}

      <div className='rounded-md bg-slate-500 w-5/6 m-4 flex flex-col justify-between'>
        <div className='flex'>
          <Image className='rounded-md' src={UPS_Store} width={200} height={200} alt='UPS Store Logo'></Image>

          <span className='font-serif'>
            <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-4xl" : "text-[#202020] font-bold text-4xl"}>Software Development Engineer I</p>
            <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-3xl" : "text-[#202020] font-bold text-3xl"}>The UPS Store</p>
            <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-3xl" : "text-[#202020] font-bold text-3xl"}>Aug 2023 - Present</p>
          </span>
        </div>

        <div className='flex'>
          <Image className='rounded-md' src={NM} width={200} height={200} alt='NM Logo'></Image>

          <span className='font-serif'>
            <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-4xl" : "text-[#202020] font-bold text-4xl"}>Software Engineering Intern</p>
            <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-3xl" : "text-[#202020] font-bold text-3xl"}>Northwestern Mutual</p>
            <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-3xl" : "text-[#202020] font-bold text-3xl"}>June 2022 - Sep 2022</p>
          </span>
        </div>
      </div>
      
    </div>

  )
}