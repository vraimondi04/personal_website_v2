'use client';
import * as THREE from 'three';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { PerspectiveCamera, Environment, MeshTransmissionMaterial, Float, useGLTF, useTexture, OrbitControls, MeshPortalMaterial, RoundedBox, CameraControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three'
import { easing } from 'maath';
import { useFrame, useThree } from '@react-three/fiber';

const animatedStar = a(MeshTransmissionMaterial);

export default function Scene({ setBg, handleMode }: any) {
    const { nodes } = useGLTF('/medias/star_v2.glb');
    const star = useRef(null);
    const star2 = useRef(null);
    const [mode, setMode] = useState(false);
    const [down, setDown] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(null);
    const controlsRef = useRef<any>();
    const scene = useThree((state) => state.scene);

    useEffect(() => {
        if (active) {
            const targetPosition = new THREE.Vector3();
            scene.getObjectByName(active)?.getWorldPosition(targetPosition);
            controlsRef.current.setLookAt(0,0,5, targetPosition.x, targetPosition.y, targetPosition.z, true)
        }
        else {
            controlsRef.current.setLookAt(0,0,10, 0,0,0, true)
        }
    }, [active]);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'none' : ''
    }, [hovered])

    const [{ wobble, wobble2 }] = useSpring(
        {
            wobble: down ? 1.2 : hovered ? 1.05 : 1,
            wobble2: down ? .7 : hovered ? .55 : .5,
        },
        [mode, hovered, down]
    )

    return (
    <>
        {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} /> */}
        <ambientLight intensity={0.5} />
        <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6}/>
        <SceneStage
            texture={'medias/Untitled_Artwork.jpg'}
            name={'Star'}
            active={active}
            setActive={setActive}
        >
            <Float>
                <a.mesh
                    ref={star} {...nodes.Star005}
                    scale={wobble}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    onPointerDown={() => setDown(true)}
                    onPointerUp={() => {
                        setDown(false)
                        handleMode()
                        setMode(!mode)
                        setBg({ background: !mode ? '#202020' : '#f0f0f0'})
                    }}>
                    <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.6} backside={true}/>
                </a.mesh>
                <a.mesh ref={star2} {...nodes.Star005} scale={wobble}>
                    <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.6} backside={true}/>
                </a.mesh>
            </Float>
        </SceneStage>
    </>
    )

}

const SceneStage = ({ children, texture, name, active, setActive, ...props}) => {
    const map = useTexture(texture);
    // const portalMaterial = useRef({});
    const portalMaterial = useRef<any>();

    useFrame((_state, delta) => {
        const worldOpen = active === name;
        easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    })
    return <group {...props}>
        <RoundedBox name={name} args={[3, 4, 0.1]} onDoubleClick={() => setActive(active === name ? null : name)}>
            <MeshPortalMaterial 
                ref={portalMaterial}
                side={THREE.DoubleSide}
            >
                {children}
                <Environment preset="sunset" />
                <mesh>
                    <sphereGeometry args={[6, 64, 64]} />
                    <meshStandardMaterial map={map} side={THREE.BackSide} />
                </mesh>
            </MeshPortalMaterial>
        </RoundedBox>
    </group>
}