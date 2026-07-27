import { Html } from "@react-three/drei";

interface MarkerProps {
  position: [number, number, number];
  label: string;
}

export default function Marker({
  position,
  label,
}: MarkerProps) {
  return (
    <Html position={position} center>
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
        <span className="mt-2 rounded bg-black/80 px-2 py-1 text-xs text-white">
          {label}
        </span>
      </div>
    </Html>
  );
}