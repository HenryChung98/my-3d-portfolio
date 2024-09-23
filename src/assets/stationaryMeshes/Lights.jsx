export default function Lights({ lightOn }) {
  return (
    <>
    <ambientLight intensity={lightOn ? 1.5 : 0.1} />
      {/* right */}
      <directionalLight intensity={lightOn ? 0.3 : 0} position={[-3, 3, -3]} />
      {/* left */}
      <directionalLight intensity={lightOn ? 0.3 : 0} position={[3, 3, -3]} />
      {/* front */}
      <directionalLight
        intensity={lightOn ? 1 : 0}
        position={[0, 2, -1]}
        castShadow
      />
      {/* floor */}
      <directionalLight intensity={lightOn ? 1 : 0} position={[0, 2, 0]} />
    </>
  );
}
