import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, MathUtils, Group } from "three";
import earthDay from "@/assets/textures/earth-day.jpg";

interface EarthProps {
  children?: React.ReactNode;
  targetRotationY?: number;
}

export default function Earth({
  children,
  targetRotationY = 0,
}: EarthProps) {
  const groupRef = useRef<Group>(null!);

  const texture = useLoader(TextureLoader, earthDay);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Floating animation
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.08;

    // Smooth rotation to selected location
    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      delta * 2
    );
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {children}
    </group>
  );
}