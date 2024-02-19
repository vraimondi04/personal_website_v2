'use client';
import { Canvas } from '@react-three/fiber'
import Star from './Star';
import { Environment } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas style={{background: '#000000'}} orthographic camera={{position: [0, 0, 15], zoom: 30}}>
        <Star />
        <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset="dawn" />
    </Canvas>
  )

}