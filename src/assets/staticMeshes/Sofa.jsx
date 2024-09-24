import React from "react";
import { RoundedBox, useTexture } from "@react-three/drei";

export default function Sofa() {
  //   const fabricTexture = useTexture('/path/to/fabric-texture.jpg');

  return (
    <group position={[2, -3.205, -3.7]}>
      {/* 소파 좌석 */}
      <RoundedBox
        args={[3, 0.6, 2]}
        radius={0.2}
        smoothness={4}
        position={[0, 0.5, 0]}
        castShadow
        receiveShadow
      >
        {/* <meshStandardMaterial map={fabricTexture} /> */}
        <meshStandardMaterial color={"lightgray"} />
      </RoundedBox>

      {/* 소파 등받이 */}
      <RoundedBox
        args={[3, 1.5, 0.4]}
        radius={0.2}
        smoothness={4}
        position={[0, 1.1, -0.8]}
        castShadow
        receiveShadow
      >
        {/* <meshStandardMaterial map={fabricTexture} /> */}
        <meshStandardMaterial color={"lightgray"} />
      </RoundedBox>

      {/* 소파 팔걸이 좌측 */}
      <RoundedBox
        args={[0.5, 0.8, 2]}
        radius={0.25}
        smoothness={4}
        position={[-1.5, 0.8, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={"lightgray"} />
      </RoundedBox>

      {/* 소파 팔걸이 우측 */}
      <RoundedBox
        args={[0.5, 0.8, 2]}
        radius={0.25}
        smoothness={4}
        position={[1.5, 0.8, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={"lightgray"} />
      </RoundedBox>
    </group>
  );
}
