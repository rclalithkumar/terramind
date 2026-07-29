import { useFrame, useLoader } from "@react-three/fiber";
import {
  TextureLoader,
  AdditiveBlending,
} from "three";
import { useRef } from "react";
import { Mesh } from "three";

import clouds from "@/assets/textures/clouds.png";

export default function CloudLayer() {
  const meshRef = useRef<Mesh>(null!);

  const texture = useLoader(TextureLoader, clouds);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.03;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.01, 128, 128]} />

      <meshStandardMaterial
  map={texture}
  transparent
  opacity={0.28}
  depthWrite={false}
  blending={AdditiveBlending}
/>
    </mesh>
  );
}