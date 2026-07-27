import { useMemo } from "react";
import { LOCATIONS } from "./locations";

interface Props {
  selectedLocation: string | null;
}

export default function CameraController({
  selectedLocation,
}: Props) {
  const rotation = useMemo(() => {
    if (!selectedLocation) return 0;

    const location =
      LOCATIONS[
        selectedLocation.toLowerCase() as keyof typeof LOCATIONS
      ];

    if (!location) return 0;

    return (-location.lng * Math.PI) / 180;
  }, [selectedLocation]);

  return rotation;
}