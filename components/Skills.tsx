import React from 'react'
import Image from 'next/image'
import ListStar from '@/public/medias/Star-Lists.svg'
import { a } from '@react-spring/web'

export default function Skills({ darkMode }: any) {

    const languages = [
        { name: 'TypeScript' },
        { name: 'Python' },
        { name: 'C#' },
        { name: 'C++' },
        { name: 'SQL' },
        { name: 'HTML' },
        { name: 'CSS' },
    ]

    const developerTools = [
        { name: 'Git' },
        { name: 'Microsoft Azure' },
        { name: 'Google Cloud Platform' },
        { name: 'Unity' },
    ]

    const frameworks = [
        { name: 'Angular' },
        { name: 'React.js' },
        { name: 'Next.js' },
        { name: 'TailwindCSS' },
    ]
  
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div className='rounded-md bg-slate-200 w-full m-4 flex justify-between'>
                <div className='flex flex-col'>
                    <p className="font-serif text-[#202020] font-bold text-xl lg:text-2xl 2xl:text-4xl">Languages</p>
                    {languages.map(({name}) => (
                        <div className='flex'>
                            <Image className='rounded-md mr-4' src={ListStar} width={20} height={20} alt='List Star'></Image>
                            <p className='font-serif text-[#202020] font-medium text-lg lg:text-xl 2xl:text-3xl'>{name}</p>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col'>
                    <p className="font-serif text-[#202020] font-bold text-xl lg:text-2xl 2xl:text-4xl">Developer Tools</p>
                    {developerTools.map(({name}) => (
                        <div className='flex'>
                            <Image className='rounded-md mr-4' src={ListStar} width={20} height={20} alt='List Star'></Image>
                            <p className='font-serif text-[#202020] font-medium text-lg lg:text-xl 2xl:text-3xl'>{name}</p>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col'>
                    <p className="font-serif text-[#202020] font-bold text-xl lg:text-2xl 2xl:text-4xl">Frameworks</p>
                    {frameworks.map(({name}) => (
                        <div className='flex'>
                            <Image className='rounded-md mr-4' src={ListStar} width={20} height={20} alt='List Star'></Image>
                            <p className='font-serif text-[#202020] font-medium text-lg lg:text-xl 2xl:text-3xl'>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}