import React from 'react'
import Image from 'next/image'
import Yummy from '@/public/medias/yummy-photo.png'
import { a } from '@react-spring/web'

export default function Projects({ darkMode }: any) {

  const projects = [
    {
        title: 'ACM Membership Portal',
        description: 'Student portal to officiate membership, track participation, and provide workshop resources',
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
        <div className='rounded-md m-4 ml-12 flex justify-between'>
            {projects.map(({title, image, description, tech}) => (
                <div className='bg-slate-200 flex flex-col w-2/4 items-center mb-6 last:mb-0 hover:bg-red-500 rounded-md' key={title}>
                    <Image className='flex rounded-md mr-4' src={image} width={800} height={800} alt='Project Image'></Image>
        
                    <span className='font-serif'>
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