import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import Space from "./Space";
import Atmosphere from "./Atmosphere";
export default function EarthCanvas(){

 return (
   <Canvas
    camera={{
      position:[0,0,3]
    }}
   >
    <Space/>

    <ambientLight intensity={0.35} />

    <directionalLight
      position={[5, 3, 5]}
      intensity={2.2}
    />

    <directionalLight
      position={[-5, -2, -5]}
      intensity={0.4}
      color="#60a5fa"
    />

    <pointLight
      position={[0, 2, 3]}
      intensity={0.8}
      color="#818cf8"
    />

    <Earth/>
     
     <Atmosphere/>

    <OrbitControls
      enablePan={false}
    />

   </Canvas>
 );

}