import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { MathUtils } from "three";

import Earth from "./Earth";
import Space from "./Space";
import Atmosphere from "./Atmosphere";
import Marker from "./Marker";

import { LOCATIONS } from "./locations";
import { latLngToVector3 } from "@/utils/latLngToVector3";

interface EarthCanvasProps {
  selectedLocation?: string | null;
}

export default function EarthCanvas({
  selectedLocation = null,
}: EarthCanvasProps) {
  useEffect(() => {
    if (!selectedLocation) return;

    console.log("Earth focusing on:", selectedLocation);
  }, [selectedLocation]);

  const location =
    selectedLocation &&
    LOCATIONS[
      selectedLocation.toLowerCase() as keyof typeof LOCATIONS
    ];

  const targetRotationY = location
    ? MathUtils.degToRad(-location.lng)
    : 0;

  const markerPosition = location
    ? latLngToVector3(location.lat, location.lng, 1.02)
    : null;

  return (
    <Canvas
      camera={{
        position: [0, 0, 3],
        fov: 45,
      }}
    >
      {/* Space Background */}
      <Space />

      {/* Lights */}
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

      {/* Earth + Children */}
      <Earth targetRotationY={targetRotationY}>
        <Atmosphere />

        {markerPosition && (
          <Marker
            position={markerPosition}
            label={selectedLocation ?? undefined}
          />
        )}
      </Earth>

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate
        minDistance={2.2}
        maxDistance={5}
      />
    </Canvas>
  );
}