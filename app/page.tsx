"use client";
import React, { useState } from 'react';
import Experience from "@/components/Experience";
import Scene from "@/components/Scene";
import Caption from "@/components/Caption";
import Skills from "@/components/Skills";
import Projects from '@/components/Projects';
import { Canvas } from '@react-three/fiber';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';
// import dynamic from 'next/dynamic';

// // const Scene = dynamic(() => import('@/components/Scene'), {
// //     ssr: false,
// // })

export default function Index() {
  const [{background}, set] = useSpring({ background: '#f0f0f0'}, [])
  const [darkMode, setDarkMode] = useState(false);

  const updateDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // TODO: Refactor the main style in the global style sheet --> try to add it with tailwind here

  return (
    <>
    <a.main style={{ background } as any}>
      <Caption darkMode={darkMode} />

      <Canvas className="flex flex-1 h-screen">
        <Scene setBg={set} handleMode={updateDarkMode} />
      </Canvas>
    </a.main>

    <a.div className="flex justify-evenly" style={{ background } as any}>
      <a.div className="lg:mr-20 2xl:mr-52">
        <p className="text-[#597ae8] font-bold text-3xl lg:text-4.5xl 2xl:text-6xl font-serif lg:ml-16 2xl:ml-12">Experience</p>
        <a.div className='flex flex-row mt-4'>
          <Experience darkMode={darkMode} />
        </a.div>
      </a.div>

      <a.div>
        <p className="text-[#597ae8] font-bold text-3xl lg:text-4.5xl 2xl:text-6xl font-serif lg:ml-2">Skills</p>
        <a.div className='flex flex-row mt-4'>
          <Skills darkMode={darkMode} />
        </a.div>
      </a.div>

    </a.div>

    <a.div className="flex pt-16" style={{ background } as any}>
      <a.div>
        <p className="text-[#597ae8] font-bold text-3xl lg:text-4.5xl 2xl:text-6xl font-serif lg:ml-16 2xl:ml-44">Projects</p>
        <a.div className='flex flex-row mt-4'>
          <Projects darkMode={darkMode} />
        </a.div>
      </a.div>

    </a.div>
    </>
  );
}
