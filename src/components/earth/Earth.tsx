import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import earthDay from "@/assets/textures/earth-day.jpg";

export default function Earth() {

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
    <mesh ref={earthRef}>

      <sphereGeometry
        args={[1,128,128]}
      />

      <meshStandardMaterial
        map={texture}
      />

    </mesh>
  );
}