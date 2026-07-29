import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";


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


  const mesh =
    useRef<Mesh>(null);



  useFrame(({ clock }) => {

    if (!mesh.current)
      return;


    const scale =
      1 +
      Math.sin(
        clock.elapsedTime * 4
      ) * 0.15;


    mesh.current.scale.set(
      scale,
      scale,
      scale
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



      <Html
        distanceFactor={8}
      >

        <div
          className="
          rounded-xl
          border
          border-white/20
          bg-black/70
          backdrop-blur-xl
          px-3
          py-2
          text-xs
          text-white
          shadow-xl
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