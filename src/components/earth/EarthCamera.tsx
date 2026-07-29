import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";


interface Props {
  target?: [number, number, number] | null;
}


export default function EarthCamera({
  target,
}: Props) {

  const { camera } = useThree();

  const desiredPosition = useRef(
    new Vector3()
  );


  useFrame(() => {

  if (!target)
    return;


  const direction = new Vector3(
    target[0],
    target[1],
    target[2]
  );


  direction.normalize();


  desiredPosition.current.copy(
    direction.multiplyScalar(3.5)
  );


  camera.position.lerp(
    desiredPosition.current,
    0.03
  );


  camera.lookAt(
    0,
    0,
    0
  );

});


  return null;
}