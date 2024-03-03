'use client';
import * as THREE from 'three';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, MeshTransmissionMaterial, Float, useGLTF } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three'

const animatedStar = a(MeshTransmissionMaterial);

export default function Scene({ setBg }: any) {
    const { nodes } = useGLTF('/medias/star_v2.glb');
    const star = useRef(null);
    const star2 = useRef(null);
    const [mode, setMode] = useState(false);
    const [down, setDown] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'none' : ''
    }, [hovered])

    const [{ wobble, wobble2, color }] = useSpring(
        {
            wobble: down ? 6.2 : hovered ? 6.05 : 6,
            wobble2: down ? 3.7 : hovered ? 3.55 : 3.5,
            color: hovered ? '#E8B059' : mode ? '#202020' : 'white',
        },
        [mode, hovered, down]
    )

    //TODO ADD Light onto the Star

    return (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <Suspense fallback={null}>
            <Float>
                <a.mesh
                    ref={star} {...nodes.Star005}
                    scale={wobble}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    onPointerDown={() => setDown(true)}
                    onPointerUp={() => {
                        setDown(false)
                        setMode(!mode)
                        setBg({ background: !mode ? '#202020' : '#f0f0f0', fill: !mode ? '#f0f0f0' : '#202020' })
                    }}>
                    <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.6} backside={true}/>
                </a.mesh>
                <a.mesh ref={star2} {...nodes.Star005} scale={wobble2}>
                    <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.6} backside={true}/>
                </a.mesh>
            </Float>
            <Environment preset="sunset" />
        </Suspense>

    </>
    )

}