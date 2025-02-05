import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { a } from '@react-spring/web'

export default function Caption({ darkMode }: any) {

    // TODO: Fix styling sizing for Laptop / Mobile Screens --> try changing text size
  
  return (
    <div className='flex flex-1 flex-col pointer-events-none justify-center items-center'>
      <div className='flex flex-col items-center justify-center font-bold lg:text-4xl 2xl:text-6xl text-xl font-serif lg:ml-12'>
        <p className="text-[#E8B059] lg:mb-3">{`- Hi, I'm Vincent -`}</p>
        <p className={darkMode === true ? "text-[#f0f0f0]" : "text-[#202020]"}>Software Dev +
          <span className=''>
            <TypeAnimation 
              sequence={[
                " Creative",
                4000,
                " Pokemon Trainer",
                4000,
              ]}
              speed={45}
              deletionSpeed={45}
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
