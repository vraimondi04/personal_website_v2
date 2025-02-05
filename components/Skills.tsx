import React from 'react'
import Image from 'next/image'
import ListStar from '@/public/medias/Star-Lists.svg'
import ListStarLight from '@/public/medias/Star-Lists-Light.svg'
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
        { name: 'Firebase' },
    ]

    const currentlyLearning = [
        { name: 'AR Development'},
        { name: 'React-Three Fiber' },
        { name: 'React Native + Expo' }
    ]
  
  return (
    <>
        <div className={`flex flex-col justify-center lg:items-center rounded-md ${darkMode ? 'bg-[#202020] border-2 border-slate-200' : 'bg-slate-200'} w-full lg:w-11/12 2xl:w-full m-4`}>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-16 lg:pb-6 2xl:pb-4'>
                <div className='flex flex-col ml-3'>
                    <p className={`font-serif ${darkMode ? 'text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 inline-block bg-clip-text' : 'text-[#202020]'} font-bold text-xl lg:text-2xl 2xl:text-4xl mb-3`}>Languages</p>
                    {languages.map(({name}) => (
                        <div className='flex' key={name}>
                            <Image className='rounded-md mr-4' src={darkMode ? ListStarLight : ListStar} width={20} height={20} alt='List Star'></Image>
                            <p className={`font-serif ${darkMode ? 'text-[#f0f0f0]' : 'text-[#202020]'} font-medium text-lg lg:text-xl 2xl:text-3xl`}>{name}</p>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col ml-3 lg:ml-0'>
                    <p className={`font-serif ${darkMode ? 'text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 inline-block bg-clip-text' : 'text-[#202020]'} font-bold text-xl lg:text-2xl 2xl:text-4xl mb-3`}>Developer Tools</p>
                    {developerTools.map(({name}) => (
                        <div className='flex' key={name}>
                            <Image className='rounded-md mr-4' src={darkMode ? ListStarLight : ListStar} width={20} height={20} alt='List Star'></Image>
                            <p className={`font-serif ${darkMode ? 'text-[#f0f0f0]' : 'text-[#202020]'}  font-medium text-lg lg:text-xl 2xl:text-3xl`}>{name}</p>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col ml-3 lg:ml-0 mr-3'>
                    <p className={`font-serif ${darkMode ? 'text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 inline-block bg-clip-text' : 'text-[#202020]'}  font-bold text-xl lg:text-2xl 2xl:text-4xl mb-3`}>Frameworks</p>
                    {frameworks.map(({name}) => (
                        <div className='flex' key={name}>
                            <Image className='rounded-md mr-4' src={darkMode ? ListStarLight : ListStar} width={20} height={20} alt='List Star'></Image>
                            <p className={`font-serif ${darkMode ? 'text-[#f0f0f0]' : 'text-[#202020]'}  font-medium text-lg lg:text-xl 2xl:text-3xl`}>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col ml-3 lg:ml-0 mb-8'>
                    <p className={`font-serif ${darkMode ? 'text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 inline-block bg-clip-text' : 'text-[#202020]'}  font-bold text-xl lg:text-2xl 2xl:text-4xl mr-3 mt-6 lg:mt-0 mb-3`}>Currently Learning</p>
                    {currentlyLearning.map(({name}) => (
                        <div className='flex' key={name}>
                            <Image className='rounded-md mr-4' src={darkMode ? ListStarLight : ListStar} width={20} height={20} alt='List Star'></Image>
                            <p className={`font-serif ${darkMode ? 'text-[#f0f0f0]' : 'text-[#202020]'}  font-medium text-lg lg:text-xl 2xl:text-3xl`}>{name}</p>
                        </div>
                    ))}
                </div>
        </div>
    </>
  )
}