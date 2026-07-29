import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { LOCATIONS } from "./locations";

interface Props {
  selectedLocation: string | null;
}

export default function CameraController({
  selectedLocation,
}: Props) {

  const { camera } = useThree();

  const target = useRef(
    new Vector3(0, 0, 3)
  );


  const isAnimating = useRef(false);


  useEffect(() => {

  if (!selectedLocation) return;


  const key =
    selectedLocation.toLowerCase() as keyof typeof LOCATIONS;


  const location =
    LOCATIONS[key];


  if (!location) return;


  target.current.set(
    0,
    0,
    2.6
  );


  isAnimating.current = true;


}, [selectedLocation]);



  useFrame(() => {

    if (!isAnimating.current)
      return;


    camera.position.lerp(
      target.current,
      0.05
    );


    if (
      camera.position.distanceTo(
        target.current
      ) < 0.01
    ) {

      camera.position.copy(
        target.current
      );

      isAnimating.current = false;

    }

  });


  return null;
}