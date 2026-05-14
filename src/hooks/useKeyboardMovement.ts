import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useGameStore } from "@/store/useGameStore";

const MOVE_SPEED = 0.025;

type KeysPressed = {
  [key: string]: boolean;
};

export type Zone = {
  id: string;
  position: THREE.Vector3;
};

export function useKeyboardMovement(
  groupRef: React.RefObject<THREE.Group | null>,
  ringRef?: React.RefObject<THREE.Mesh | null>,
  zones?: Zone[]
) {
  const keysPressed = useRef<KeysPressed>(
    {}
  );

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      keysPressed.current[event.key] =
        true;
    };

    const handleKeyUp = (
      event: KeyboardEvent
    ) => {
      keysPressed.current[event.key] =
        false;
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "keyup",
      handleKeyUp
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "keyup",
        handleKeyUp
      );
    };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const position =
      groupRef.current.position;

    const speed =
      MOVE_SPEED * delta * 60;

    const up =
      keysPressed.current["ArrowUp"] ||
      keysPressed.current["w"] ||
      keysPressed.current["W"];

    const down =
      keysPressed.current["ArrowDown"] ||
      keysPressed.current["s"] ||
      keysPressed.current["S"];

    const left =
      keysPressed.current["ArrowLeft"] ||
      keysPressed.current["a"] ||
      keysPressed.current["A"];

    const right =
      keysPressed.current["ArrowRight"] ||
      keysPressed.current["d"] ||
      keysPressed.current["D"];

    // Forward
    if (up) {
      position.x -= speed;
      position.z -= speed;
    }

    // Backward
    if (down) {
      position.x += speed;
      position.z += speed;
    }

    // Left
    if (left) {
      position.x -= speed;
      position.z += speed;
    }

    // Right
    if (right) {
      position.x += speed;
      position.z -= speed;
    }

    // Ring follows avatar
    if (ringRef?.current) {
      ringRef.current.position.x =
        position.x;

      ringRef.current.position.z =
        position.z;

      ringRef.current.position.y =
        0.01;
    }

    // Proximity detection
    const {
      visitZone,
      setCurrentZone,
    } = useGameStore.getState();

    let insideZone = false;

    zones?.forEach((zone) => {
      const distance =
        position.distanceTo(
          zone.position
        );

      if (distance < 2.5) {
        insideZone = true;
        visitZone(zone.id);
      }
    });

    // Reset current zone
    if (!insideZone) {
      setCurrentZone(null);
    }
  });
}