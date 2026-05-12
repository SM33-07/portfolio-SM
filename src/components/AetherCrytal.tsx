import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function AetherCrystal() {
    const meshRef = useRef<Mesh>(null!);

    useFrame((_, delta) => {
        meshRef.current.rotation.y += delta * 1.5
    });

    return (
        <mesh ref={meshRef} rotation={[0, 0, 0]} position={[3, 0.5, 3]}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#a855f7" />
        </mesh>
    );
}