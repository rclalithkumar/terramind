import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending } from "three";
import type { Mesh } from "three";

export default function Atmosphere() {

  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {

    if (!meshRef.current) return;

    const material = meshRef.current.material;

    if ("opacity" in material) {

      material.opacity =
        0.14 +
        Math.sin(state.clock.elapsedTime * 1.5) * 0.025;

    }

  });


  return (
    <mesh ref={meshRef} scale={1.035}>

      <sphereGeometry
        args={[1, 128, 128]}
      />

      <meshBasicMaterial
        color="#38bdf8"
        transparent
        opacity={0.14}
        blending={AdditiveBlending}
        side={2}
        depthWrite={false}
      />

    </mesh>
  );
}