"use client";
import React from 'react'
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
  const [{background, fill}, set] = useSpring({ background: '#f0f0f0', fill: '#202020'}, [])
  return (
    <>
    <a.main style={{ background }}>
      <Canvas className="canvas">
        <Scene setBg={set} />
      </Canvas>
      <Caption fill={fill} />
      {/* <Landing /> */}
    </a.main>
    </>
  );
}
