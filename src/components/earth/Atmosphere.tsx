import { AdditiveBlending } from "three";


export default function Atmosphere() {

return (

  <mesh scale={[1.03,1.03,1.03]}>

    <sphereGeometry
      args={[
        1,
        128,
        128
      ]}
    />

    <meshBasicMaterial

      color="#38bdf8"

      transparent

      opacity={0.18}

      blending={AdditiveBlending}

      side={2}

    />

  </mesh>

);

}