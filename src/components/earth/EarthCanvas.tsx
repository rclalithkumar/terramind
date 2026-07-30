import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { MathUtils } from "three";
import { useScenarioStore } from "@/store/scenarioStore";
import { getRiskLevel } from "@/utils/riskLevel";
import Earth from "./Earth";
import Space from "./Space";
import Marker from "./Marker";
import EarthCamera from "./EarthCamera";
import { LOCATIONS } from "./locations";

import { latLngToVector3 } from "@/utils/latLngToVector3";


interface EarthCanvasProps {
  selectedLocation?: string | null;
}


export default function EarthCanvas({
  selectedLocation = null,
}: EarthCanvasProps) {

  const simulationResult = useScenarioStore(
  (state) => state.simulationResult
);

const currentTimelineStep = useScenarioStore(
  (state) => state.currentTimelineStep
);



  useEffect(() => {

    if (!selectedLocation)
      return;


    console.log(
      "Earth focusing on:",
      selectedLocation
    );

  }, [selectedLocation]);


  
  const locationKey =
  selectedLocation
    ?.toLowerCase()
    .replace(/\s+/g, "");


const location =
  locationKey
    ? LOCATIONS[locationKey]
    : null;



  const targetRotationY =
location
? MathUtils.degToRad(location.lng - 90)
: 0;


  const markerPosition =
    location
      ? latLngToVector3(
          location.lat,
          location.lng,
          1.06
        )
      : null;

    const currentSeverity =
simulationResult
?.timeline[currentTimelineStep];



  return (

    <Canvas

      camera={{
        position: [0, 0, 3],
        fov: 45,
      }}

    >


      {/* Space Background */}

      <Space />



      {/* Camera Fly To */}

      <EarthCamera
        target={markerPosition}
      />



      {/* Lighting */}

      <ambientLight
        intensity={0.35}
      />


      <directionalLight

        position={[5, 3, 5]}

        intensity={2.5}

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



      {/* Earth System */}

      <Earth
        targetRotationY={targetRotationY}
      >


        {markerPosition && (

          <Marker

  position={markerPosition}

  label={
    location?.name ?? "Unknown"
  }

  severity={
    currentSeverity
    ? getRiskLevel(
        Number(currentSeverity.severity)
      )
    : "Low"
  }

/>

        )}


      </Earth>



      {/* Additional Camera Logic */}

      



      {/* Controls */}

      <OrbitControls

        enablePan={false}

        enableZoom

        enableRotate

        enableDamping

        dampingFactor={0.08}

      />


    </Canvas>

  );
}