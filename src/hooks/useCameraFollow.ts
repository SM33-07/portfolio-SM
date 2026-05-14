import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LERP_FACTOR = 0.05;

export function useCameraFollow(
  groupRef: React.RefObject<THREE.Group | null>
) {
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const { camera } = state;

    const avatarX =
      groupRef.current.position.x;

    const avatarZ =
      groupRef.current.position.z;

    const targetX = avatarX + 10;
    const targetZ = avatarZ + 10;

    camera.position.x =
      THREE.MathUtils.lerp(
        camera.position.x,
        targetX,
        LERP_FACTOR * delta * 60
      );

    camera.position.z =
      THREE.MathUtils.lerp(
        camera.position.z,
        targetZ,
        LERP_FACTOR * delta * 60
      );

    // Fixed height
    camera.position.y = 10;

    // Keep looking at avatar
    camera.lookAt(
      avatarX,
      0,
      avatarZ
    );
  });
}