"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

type AetherCrystalProps = {
  position: [number, number, number];
  color?: string;
};

export default function AetherCrystal({
  position,
  color = "#a855f7",
}: AetherCrystalProps) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.y +=
      delta * 1.5;
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry
          args={[1.4, 32, 32]}
        />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.12}
        />
      </mesh>

      <mesh
        ref={meshRef}
        rotation={[0, 0, 0]}
        position={[0, 1, 0]}
      >
        <octahedronGeometry
          args={[1, 0]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}