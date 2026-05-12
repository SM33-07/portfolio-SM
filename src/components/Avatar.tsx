"use client";

import { useRef } from "react";
import * as THREE from "three";

import {
  useKeyboardMovement,
  Zone,
} from "@/hooks/useKeyboardMovement";

import { useCameraFollow } from "@/hooks/useCameraFollow";

type AvatarProps = {
  zones?: Zone[];
};

export default function Avatar({
  zones,
}: AvatarProps) {
  const groupRef =
    useRef<THREE.Group>(null);

  const ringRef =
    useRef<THREE.Mesh>(null);

  useKeyboardMovement(
    groupRef,
    ringRef,
    zones
  );

  useCameraFollow(groupRef);

  return (
    <>
      {/* Ground Ring */}
      <mesh
        ref={ringRef}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <ringGeometry
          args={[0.5, 0.7, 32]}
        />

        <meshBasicMaterial
          color="#9333ea"
        />
      </mesh>

      {/* Avatar */}
      <group ref={groupRef}>
        <mesh position={[0, 1, 0]}>
          <octahedronGeometry
            args={[0.5]}
          />

          <meshStandardMaterial
            color="#9333ea"
          />
        </mesh>
      </group>
    </>
  );
}