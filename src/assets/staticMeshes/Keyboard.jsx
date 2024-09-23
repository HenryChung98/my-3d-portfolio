import { useLoader, useThree } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Text3D, OrbitControls, Html } from "@react-three/drei";

export default function Keyboard({ onClick }) {
  const keyboard = useLoader(FBXLoader, "/meshes/keyboard.fbx");

  useEffect(() => {
    if (keyboard) {
      keyboard.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
    }
  }, [keyboard]);

  return (
    <>
      <primitive
        object={keyboard}
        position={[-1.98, -1.6, -2.4]}
        rotation={[0, THREE.MathUtils.degToRad(0), 0]}
        scale={[0.02, 0.02, 0.02]}
        onClick={onClick}
      />
    </>
  );
}
