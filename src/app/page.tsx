"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import AetherCrystal from "@/components/AetherCrytal";
import WorldGround from "@/components/WorldGround";
import Avatar from "@/components/Avatar";
import GameHUD from "@/components/GameHUD";

const zones = [
  {
    id: "The Forge",
    position: new THREE.Vector3(
      3,
      0,
      3
    ),
  },
];

export default function Page() {
  return (
    <main className="w-screen h-screen">
      <Canvas
        orthographic
        camera={{
          position: [10, 10, 10],
          zoom: 80,
        }}
      >
        <ambientLight intensity={0.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          color="#c084fc"
        />

        <AetherCrystal />

        <WorldGround />

        <Avatar zones={zones} />
      </Canvas>

      <GameHUD />
    </main>
  );
}