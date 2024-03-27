import React from 'react'
import Image from 'next/image'
import Yummy from '@/public/medias/yummy-project.png'
import YummyTest from '@/public/medias/yummy-test.gif'
import MembershipPortal from '@/public/medias/membership-portal.png'
import { SiNextdotjs, SiTailwindcss, SiUnity, SiCsharp, SiGooglecloud } from "react-icons/si";
import { a } from '@react-spring/web'

export default function Projects({ darkMode }: any) {

  const projects = [
    {
        title: 'ACM Membership Portal',
        description: 'Student portal + admin dashboard to officiate membership, track participation, and provide workshop resources',
        image: MembershipPortal,
        tech: [SiNextdotjs, SiTailwindcss, SiGooglecloud]
    },
    {
        title: 'Yummy!',
        description: 'A Virtual Reality cooking game. Player interacts with the kitchen and food + earns points for preparing correctly',
        image: Yummy,
        tech: [SiUnity, SiCsharp]
    }

  ]
  
  return (
    <>
        <div className='m-4 flex flex-col lg:flex-row justify-evenly'>
            {projects.map(({title, image, description, tech}) => (
                <div className='bg-slate-200 flex flex-col lg:w-2/5 2xl:w-2/6 items-center mb-6 rounded-md' key={title}>
                    <Image className='flex rounded-md' src={image} width={800} height={800} alt='Project Image'></Image>
        
                    <span className='m-4 font-serif'>
                        <p className="text-[#202020] font-bold text-xl lg:text-2xl 2xl:text-4xl">{title}</p>
                        <p className="text-[#202020] font-medium text-lg lg:text-xl 2xl:text-3xl">{description}</p>

                        <div className='flex mt-8 text-4xl'>
                            {tech.map((Icon, index) => (
                                <Icon className='mr-8' key={index}></Icon>
                            ))}
                        </div>
                    </span>

                </div>
            ))}
        </div>
    </>
  )
}