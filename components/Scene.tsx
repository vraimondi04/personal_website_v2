'use client';
import { Canvas } from '@react-three/fiber'
import Star from './Star';
import { Environment } from '@react-three/drei'
import { useState } from 'react';

export default function Scene({ sectionName }) {
    const starPositions = [[]];
    const sectionPositions = [[]];
    const textPositions = [[]];
    const [isLanding, setLanding] = useState(sectionName);


    return (
    <Canvas style={{background: '000000'}} orthographic camera={{position: [0, 0, 15], zoom: 30}}>
        {isLanding == 'Hi, I\'\m Vincent' ? 
            <>
                <Star sectionName={sectionName} />
                <Star sectionName={''} /> 
            </>
        : 
            <>
                <Star sectionName={sectionName} />
                <mesh>hi</mesh>
            </>
        }

        <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset="apartment" />
    </Canvas>
    )

}