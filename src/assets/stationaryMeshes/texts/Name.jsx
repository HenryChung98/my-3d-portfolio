import { useThree } from "@react-three/fiber";
import { useState, useRef } from "react";
import * as THREE from "three";
import { Text3D, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

export default function Name({
  fontColor,
  emissive,
  emissiveIntensity,
  setIsZoomIn,
}) {
  const roomWidth = 10;
  const roomHeight = 5;
  const roomDepth = 10;

  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const orbitRef = useRef();

  // hover
  const handlePointerOver = () => setHovered(true);
  const handlePointerOut = () => setHovered(false);

  // zoom in
  function handleClick() {
    setIsZoomIn(true);
    gsap.to(camera.position, {
      x: -2,
      y: 1,
      z: -1,
      duration: 1,
      onStart: () => camera.updateProjectionMatrix(),
    });
  }

  return (
    <>
      <Text3D
        font="/fonts/Poppins_Bold.json"
        position={[-5, roomHeight / 2 - 1, 0.75]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        size={0.3}
        height={0.1}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        HENRY CHUNG
        <meshStandardMaterial
          color={fontColor}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </Text3D>
      <Text3D
        font="/fonts/Poppins SemiBold_Regular.json"
        position={[-5, roomHeight / 2 - 1.5, 1.7]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        size={0.2}
        height={0.1}
      >
        Game Developer / Web Developer
        <meshStandardMaterial
          color={fontColor}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </Text3D>
    </>
  );
}
