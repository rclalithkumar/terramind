export default function Atmosphere() {
  return (
    <mesh scale={1.02}>
      <sphereGeometry args={[1,128,128]} />

      <meshBasicMaterial
        color="#38bdf8"
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}