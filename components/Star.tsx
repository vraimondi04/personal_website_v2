import React, { useRef } from 'react';
import { useGLTF, Text, MeshTransmissionMaterial, Float } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';

export default function Star({ sectionName }) {
    const { nodes } = useGLTF('/medias/star_v2.glb');
    const { viewport } = useThree()
    const star = useRef([]) as any;
    const text = useRef() as any;

    useFrame( () => {
        star.current.position.x = 1.15
        star.current.position.y = 0.50
        // star.current!.rotation.x += 0.0075
        // text.current.position.x += 0.001;
        // star.current.rotation.y += 0.002
        // star.current.rotation.z += -0.003
    })

    return (
        <group scale={viewport.width / 4} >
            <Text ref={text} position={[0, 0.5, -1]} fontSize={0.275} font={'/fonts/Lora-VariableFont_wght.ttf'} color="#FFFFFF" anchorX="center" anchorY="middle">
                {sectionName}
            </Text>

            <Float>
                <mesh ref={star} {...nodes.Star005} scale={0.35}>
                    <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.6} backside={true}/>
                </mesh>
            </Float>

            <Text position={[0, 0, -5]} font={'/fonts/Lora-VariableFont_wght.ttf'} color="#FFFFFF" fontSize={0.20}>
                Software Developer and Wizard
            </Text>

        </group>
    )
}
