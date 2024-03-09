import React from 'react'
import Image from 'next/image'
import UPS_Store from '@/public/medias/the_ups_store_logo.jpeg'
import NM from '@/public/medias/northwestern_mutual_logo.jpeg'
import { FaAngular } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { a } from '@react-spring/web'

export default function Experience({ darkMode }: any) {

  // TODO: Add Badges / Icons for all of the skills for each Experience

  const jobs = [
    {
        title: 'Software Development Engineer I',
        employer: 'The UPS Store',
        timeFrame: 'Aug 2023 - Present',
        image: UPS_Store,
        tech: [FaAngular, SiDotnet]
    },
    {
        title: 'Software Engineering Intern',
        employer: 'Northwestern Mutual',
        timeFrame: 'June 2022 - Sep 2022',
        image: NM,
        tech: [FaReact]
    }

  ]
  
  return (
    <div className='flex w-2/4 flex-col justify-center items-center'>

      <div className='rounded-md bg-slate-200 w-11/12 m-4 flex flex-col justify-between'>
        {jobs.map(({title, employer, timeFrame, image, tech}) => (
            <div className='flex mb-6 hover:bg-red-500 rounded-md' key={title}>
                <Image className='rounded-md mr-4' src={image} width={200} height={200} alt='UPS Store Logo'></Image>
    
                <span className='font-serif'>
                    <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-xl lg:text-2xl 2xl:text-4xl" : "text-[#202020] font-bold text-xl lg:text-2xl 2xl:text-4xl"}>{title}</p>
                    <p className={darkMode === true ? "text-[#f0f0f0] font-bold text-lg lg:text-xl 2xl:text-3xl" : "text-[#202020] font-bold text-lg lg:text-xl 2xl:text-3xl"}>{employer}</p>
                    <p className={darkMode === true ? "text-[#f0f0f0] font-medium text-lg lg:text-xl 2xl:text-3xl" : "text-[#202020] font-medium text-lg lg:text-xl 2xl:text-3xl"}>{timeFrame}</p>

                    <div className='flex mt-10 text-4xl'>
                        {tech.map((Icon) => (
                            <Icon className='mr-8'></Icon>
                        ))}
                    </div>
                </span>

            </div>
        ))}
      </div>
      
    </div>

  )
}