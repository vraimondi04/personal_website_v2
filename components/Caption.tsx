import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { a } from '@react-spring/web'

export default function Caption({ darkMode }: any) {
  
  return (
    <div className='flex flex-1 flex-col pointer-events-none justify-center items-center'>
      <div className='font-bold text-6xl font-serif'>
        <p className="flex justify-center text-[#E8B059]">- Hi, I'm Vincent -</p>
        <p className={darkMode === true ? "text-[#f0f0f0]" : "text-[#202020]"}>Software Dev +
          <span className=''>
            <TypeAnimation 
              sequence={[
                " Wizard",
                4000,
                " Pokemon Trainer",
                4000,
              ]}
              speed={65}
              deletionSpeed={65}
              cursor={true}
              repeat={Infinity}
              preRenderFirstString={true}
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-blue-500"
            />
          </span>
        </p>
      </div>
    </div>

  )
}
