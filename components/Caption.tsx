import React from 'react'
import { a } from '@react-spring/web'

export default function Caption({ darkMode }: any) {
  
  return (
    <div className='flex flex-1 flex-col pointer-events-none justify-center items-center'>
      <div className='font-bold text-6xl font-serif'>
        <p className="flex justify-center text-[#E8B059]">- Hi, I'm Vincent -</p>
        <p className={darkMode === true ? "text-[#f0f0f0]" : "text-[#202020]"}>Software Dev + <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-blue-500'>Wizard</span></p>
      </div>
    </div>

  )
}
