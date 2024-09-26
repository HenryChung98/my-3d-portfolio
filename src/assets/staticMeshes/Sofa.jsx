import React from "react";
import { RoundedBox, useTexture } from "@react-three/drei";

export default function Sofa() {
  const sofaTexture = useTexture("/textures/sofa.jpeg");

  return (
    <group position={[2, -3.205, -3.7]}>
      {/* seat */}
      <RoundedBox
        args={[4, 0.8, 2]}
        radius={0.2}
        smoothness={4}
        position={[0, 0.6, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial  color={"lightgray"} map=""/>
      </RoundedBox>

      {/* back */}
      <RoundedBox
        args={[4, 2, 0.4]}
        radius={0.2}
        smoothness={4}
        position={[0, 1.4, -0.8]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={"lightgray"} />
      </RoundedBox>

      {/* left */}
      <RoundedBox
        args={[0.7, 1.2, 2]}
        radius={0.25}
        smoothness={4}
        position={[-1.65, 0.85, 0.05]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={"lightgray"} />
      </RoundedBox>

      {/* right */}
      <RoundedBox
        args={[0.7, 1.2, 2]}
        radius={0.25}
        smoothness={4}
        position={[1.65, 0.85, 0.05]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={"lightgray"} />
      </RoundedBox>
    </group>
  );
}
