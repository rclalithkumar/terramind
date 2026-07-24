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

    <ambientLight intensity={0.5}/>

    <directionalLight
      position={[5,3,5]}
      intensity={2}
    />

    <Earth/>
     
     <Atmosphere/>

    <OrbitControls/>

   </Canvas>
 );

}