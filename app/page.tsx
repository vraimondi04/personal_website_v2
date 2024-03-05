"use client";
import React, { useState } from 'react'
import Experience from "@/components/Experience";
import Scene from "@/components/Scene";
import Caption from "@/components/Caption"
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
    <a.div style={{ background } as any}>
      <p className="text-[#597ae8] font-bold text-6xl font-serif ml-60">Experiences</p>
      <a.div className='flex flex-row mt-16'>
      <Experience darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      </a.div>
      
    </a.div>
    </>
  );
}
