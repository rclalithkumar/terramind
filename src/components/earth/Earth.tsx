import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, type Mesh } from "three";
import { useRef } from "react";

import earthDay from "@/assets/textures/earth-day.jpg";

interface EarthProps {
  children?: React.ReactNode;
}

export default function Earth({ children }: EarthProps) {
  const earthRef = useRef<Mesh>(null);

  const texture = useLoader(
    TextureLoader,
    earthDay
  );

  useFrame((state) => {
    if (!earthRef.current) return;

    earthRef.current.rotation.y += 0.0015;

    earthRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
  });

  return (
    <group>

      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 128, 128]} />

        <meshStandardMaterial
          map={texture}
        />
      </mesh>

      {children}

    </group>
  );
}