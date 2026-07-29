import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, MathUtils } from "three";
import type { Group } from "three";
import earthDay from "@/assets/textures/earth-day.jpg";

import CloudLayer from "./CloudLayer";
import Atmosphere from "./Atmosphere";


interface EarthProps {
  children?: React.ReactNode;
  targetRotationY?: number;
}


export default function Earth({
  children,
  targetRotationY = 0,
}: EarthProps) {

  const groupRef = useRef<Group>(null);

  const texture = useLoader(
    TextureLoader,
    earthDay
  );


  useFrame((state, delta) => {

    if (!groupRef.current)
      return;


    // Floating animation
    groupRef.current.position.y =
      Math.sin(
        state.clock.elapsedTime * 0.5
      ) * 0.08;


    // Smooth rotation
    const currentRotation =
  groupRef.current.rotation.y;


groupRef.current.rotation.y =
  MathUtils.lerp(
    currentRotation,
    targetRotationY,
    delta * 1.5
  );

  });


  return (

    <group ref={groupRef}>


      {/* Earth Surface */}

      <mesh>

        <sphereGeometry
          args={[1, 128, 128]}
        />

        <meshStandardMaterial
          map={texture}
        />

      </mesh>



      {/* Clouds */}

      <CloudLayer />



      {/* Atmosphere */}

      <Atmosphere />



      {/* Marker and other children */}

      {children}


    </group>

  );
}