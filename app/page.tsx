"use client";
import React, { useState } from 'react'
import Landing from "@/components/Landing";
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

      <Canvas className="canvas">
        <Scene setBg={set} handleMode={updateDarkMode} />
      </Canvas>
    </a.main>
    <div className='flex flex-row'>
      {/* <Landing /> */}
      {/* <Caption darkMode={darkMode} />
      <Caption darkMode={darkMode} /> */}
    </div>
    </>
  );
}
