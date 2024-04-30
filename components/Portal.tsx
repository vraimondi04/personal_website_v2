import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Portal = () => {
    const map = useTexture('medias/membership-portal.png');

    return (
        <>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <OrbitControls />
            <mesh>
                <sphereGeometry args={[5, 64, 64]} />
                <meshStandardMaterial map={map} side={THREE.BackSide} />
            </mesh>
        </>
    )
}