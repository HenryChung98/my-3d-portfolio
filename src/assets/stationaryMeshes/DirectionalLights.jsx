export default function DirectionalLights({ lightOn }) {
  return (
    <>
      {/*  */}
      <directionalLight intensity={lightOn ? 0.3 : 0} position={[-3, 3, -3]} />
      {/*  */}
      <directionalLight intensity={lightOn ? 0.3 : 0} position={[3, 3, -3]} />
      {/*  */}
      <directionalLight
        intensity={lightOn ? 1 : 0}
        position={[0, 2, -1]}
        castShadow
      />
      {/*  */}
      <directionalLight intensity={lightOn ? 1 : 0} position={[0, 2, 0]} />
    </>
  );
}
