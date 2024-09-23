import { useLoader, useThree } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Text3D, OrbitControls, Html } from "@react-three/drei";

export default function Monitor({onClick}) {
  const monitor = useLoader(FBXLoader, "/meshes/monitor.fbx");

  useEffect(() => {
    if (monitor) {
      monitor.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x202020,
            roughness: 0.5,
            metalness: 0.7,
          });
          child.castShadow = true;
        }
      });
    }
  }, [monitor]);

  return (
    <>
      <primitive
        object={monitor}
        position={[-2, -1.6, -3]}
        rotation={[0,THREE.MathUtils.degToRad(270),0]}
        scale={[0.02, 0.02, 0.02]}
        onClick={onClick}
      />
    </>
  );
}
