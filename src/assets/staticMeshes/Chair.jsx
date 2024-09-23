import { useLoader, useThree } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Text3D, OrbitControls, Html } from "@react-three/drei";

export default function Chair({onClick}) {
  const chair = useLoader(FBXLoader, "/meshes/chair.fbx");

  useEffect(() => {
    if (chair) {
        chair.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#333333",
            roughness: 0.7,
            metalness: 0.2,
          });
          child.castShadow = true;
        }
      });
    }
  }, [chair]);

  return (
    <>
      <primitive
        object={chair}
        position={[-2, -2.99, -2]}
        rotation={[0,THREE.MathUtils.degToRad(180),0]}
        scale={[0.15, 0.1, 0.15]}
        onClick={onClick}
      />
    </>
  );
}
