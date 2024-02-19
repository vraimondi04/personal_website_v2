import React, { useRef } from 'react';
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';

export default function Star() {
    const { nodes } = useGLTF('/medias/star_v2.glb');
    const { viewport } = useThree()
    const star = useRef(null);

    useFrame( () => {
        star.current.rotation.x += 0.0075
        // star.current.rotation.y += 0.002
        // star.current.rotation.z += -0.003
    })

    return (
        <group scale={viewport.width / 3} >
            <Text position={[-0.5, 0.075, -5]} fontSize={0.35} color="white" anchorX="center" anchorY="middle">
                Hades
            </Text>

            <mesh ref={star} {...nodes.Star005} scale={0.45}>
                <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.075} backside={true}/>
            </mesh>

        </group>
    )
}
