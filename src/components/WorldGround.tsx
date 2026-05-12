import { Grid } from '@react-three/drei';
export default function WorldGround() {
    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#0d0b1e" />
            </mesh>

            <Grid
                args={[20, 20]}
                position={[0, 0.01, 0]}
                cellColor="#6366f1"
            />
        </>
    );
}