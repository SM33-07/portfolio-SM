"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import AetherCrystal from "@/components/AetherCrytal";
import WorldGround from "@/components/WorldGround";
import Avatar from "@/components/Avatar";
import GameHUD from "@/components/GameHUD";

import ZonePanel from "@/components/ZonePanel";

import { ZONES } from "@/data/zones";

const zoneTriggers = ZONES.map(
  (zone) => ({
    id: zone.id,

    position: new THREE.Vector3(
      zone.position[0],
      zone.position[1],
      zone.position[2]
    ),
  })
);

export default function Page() {
  return (
    <main className="relative w-screen h-screen">
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

        <WorldGround />

        {/* Zone Crystals */}
        {ZONES.map((zone) => (
          <AetherCrystal
            key={zone.id}
            position={[zone.position[0], zone.position[1], zone.position[2]]}
            color={zone.color}
          />
        ))}

        {/* Player */}
        <Avatar
          zones={zoneTriggers}
        />
      </Canvas>

      {/* UI */}
      <GameHUD />

      <ZonePanel />
    </main>
  );
}