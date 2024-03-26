import React from 'react'
import Image from 'next/image'
import UPS_Store from '@/public/medias/the_ups_store_logo.jpeg'
import NM from '@/public/medias/northwestern_mutual_logo.jpeg'
import { FaAngular, FaReact, FaNode, FaDocker, FaAws } from "react-icons/fa";
import { SiMicrosoftazure, SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { a } from '@react-spring/web'

export default function Experience({ darkMode }: any) {

  const jobs = [
    {
        title: 'Software Development Engineer I',
        employer: 'The UPS Store',
        timeFrame: 'Aug 2023 - Present',
        image: UPS_Store,
        tech: [FaAngular, SiDotnet, SiMicrosoftazure, BiLogoTypescript, SiCsharp, SiMicrosoftsqlserver]
    },
    {
        title: 'Software Engineering Intern',
        employer: 'Northwestern Mutual',
        timeFrame: 'June 2022 - Sep 2022',
        image: NM,
        tech: [FaReact, FaNode, FaAws, FaDocker, BiLogoTypescript, SiMongodb ]
    }

  ]
  
  return (
    <>
        <div className='flex flex-col justify-center items-center'>

            <div className='rounded-md bg-slate-200 lg:w-11/12 2xl:w-full m-4 ml-24 flex flex-col'>
                {jobs.map(({title, employer, timeFrame, image, tech}) => (
                    <div className='flex mb-6 last:mb-0 rounded-md' key={title}>
                        <Image className='rounded-md mr-4' src={image} width={200} height={200} alt='Experience Image'></Image>
            
                        <span className='font-serif'>
                            <p className="text-[#202020] font-bold text-xl lg:text-2xl 2xl:text-4xl">{title}</p>
                            <p className="text-[#202020] font-bold text-lg lg:text-xl 2xl:text-3xl">{employer}</p>
                            <p className="text-[#202020] font-medium text-lg lg:text-xl 2xl:text-3xl">{timeFrame}</p>

                            <div className='flex mt-10 text-4xl'>
                                {tech.map((Icon, index) => (
                                    <Icon className='mr-8' key={index}></Icon>
                                ))}
                            </div>
                        </span>

                    </div>
                ))}
            </div>
        </div>
    </>
  )
}