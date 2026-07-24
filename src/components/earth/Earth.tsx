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


  useFrame(() => {

    if(earthRef.current){
      earthRef.current.rotation.y += 0.001;
    }

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