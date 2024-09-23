import React from "react";
import { RoundedBox, Cylinder } from "@react-three/drei";

export default function Desk() {
  const deskWidth = 3.5;
  const deskHeight = 1;
  const deskDepth = 1.5;

  const legRadius = deskWidth * 0.05;
  const legHeight = deskHeight + 0.3;

  return (
    <>
      <group position={[-2.5, -3, -3]}>
        {/* top */}
        <RoundedBox
          args={[deskWidth + 0.5, 0.2, deskDepth + 0.5]}
          radius={0.1}
          position={[0, deskHeight + 0.3, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial attach="material" color="#e6e6e6" />
        </RoundedBox>
        {/* left back */}
        <Cylinder
          args={[legRadius, legRadius, legHeight, 32]}
          position={[
            -deskWidth / 2 + legRadius,
            legHeight / 2,
            -deskDepth / 2 + legRadius,
          ]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial attach="material" color="#888888" />
        </Cylinder>
        {/* right back */}
        <Cylinder
          args={[legRadius, legRadius, legHeight, 32]}
          position={[
            deskWidth / 2 - legRadius,
            legHeight / 2,
            -deskDepth / 2 + legRadius,
          ]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial attach="material" color="#888888" />
        </Cylinder>
        {/* left front */}
        <Cylinder
          args={[legRadius, legRadius, legHeight, 32]}
          position={[
            -deskWidth / 2 + legRadius,
            legHeight / 2,
            deskDepth / 2 - legRadius,
          ]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial attach="material" color="#888888" />
        </Cylinder>
        {/* right front */}
        <Cylinder
          args={[legRadius, legRadius, legHeight, 32]}
          position={[
            deskWidth / 2 - legRadius,
            legHeight / 2,
            deskDepth / 2 - legRadius,
          ]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial attach="material" color="#888888" />
        </Cylinder>
      </group>
    </>
  );
}
