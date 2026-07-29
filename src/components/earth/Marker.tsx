import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";


interface MarkerProps {

  position: [
    number,
    number,
    number
  ];

  label?: string;

  severity?:
    | "Low"
    | "Medium"
    | "High";

}



export default function Marker({
  position,
  label,
  severity = "High",

}: MarkerProps) {


  const mesh = useRef<Mesh | null>(null);
const pulse = useRef<Mesh | null>(null);



  useFrame(({ clock }) => {

  if (!mesh.current || !pulse.current)
    return;


  const t = clock.elapsedTime;


  // Main marker breathing
  const scale =
    1 +
    Math.sin(t * 4) * 0.15;


  mesh.current.scale.set(
    scale,
    scale,
    scale
  );


  // Pulse ring animation
  const pulseScale =
    1 +
    (Math.sin(t * 3) + 1) * 0.8;


  pulse.current.scale.set(
    pulseScale,
    pulseScale,
    pulseScale
  );


});



  const color =
    severity === "High"
      ? "#ef4444"
      : severity === "Medium"
      ? "#f59e0b"
      : "#22c55e";



  return (

    <group position={position}>


      <mesh ref={mesh}>

        <sphereGeometry
          args={[
            0.035,
            32,
            32
          ]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />

      </mesh>

      <mesh ref={pulse}>

  <ringGeometry
    args={[
      0.06,
      0.09,
      64
    ]}
  />

  <meshBasicMaterial
    color={color}
    transparent
    opacity={0.35}
  />

</mesh>



      <Html
        distanceFactor={15}
      >

        <div
          className="
          rounded-xl
          border
          border-white/20
          bg-black/70
          backdrop-blur-xl
          px-2
          py-1
          text-[10px]
          text-white
          shadow-xl
          scale-75
          "
        >

          <div className="font-semibold">
            {label}
          </div>


          <div
            className="
            text-red-300
            "
          >
            {severity} Risk
          </div>

        </div>


      </Html>


    </group>

  );
}