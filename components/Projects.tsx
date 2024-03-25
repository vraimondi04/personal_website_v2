import React from 'react'
import Image from 'next/image'
import Yummy from '@/public/medias/yummy-photo.png'
import { a } from '@react-spring/web'

export default function Projects({ darkMode }: any) {

  const projects = [
    {
        title: 'ACM Membership Portal',
        description: 'Student portal + admin dashboard to officiate membership, track participation, and provide workshop resources',
        image: Yummy,
        tech: []
    },
    {
        title: 'Yummy!',
        description: 'A Virtual Reality cooking game. Player interacts with the kitchen and food + earns points for preparing correctly!',
        image: Yummy,
        tech: []
    }

  ]
  
  return (
    <>
        <div className='rounded-md m-4 flex justify-evenly'>
            {projects.map(({title, image, description, tech}) => (
                <div className='bg-slate-200 flex flex-col w-2/5 items-center mb-6 hover:bg-red-500 rounded-md' key={title}>
                    <Image className='flex rounded-md m-4' src={image} width={800} height={800} alt='Project Image'></Image>
        
                    <span className='m-4 2xl:mx-20 font-serif'>
                        <p className="text-[#202020] font-bold text-xl lg:text-2xl 2xl:text-4xl">{title}</p>
                        <p className="text-[#202020] font-bold text-lg lg:text-xl 2xl:text-3xl">{description}</p>

                        <div className='flex mt-10 text-4xl'>
                            {/* {tech.map((Icon, index) => (
                                <Icon className='mr-8'></Icon>
                            ))} */}
                        </div>
                    </span>

                </div>
            ))}
        </div>
    </>
  )
}