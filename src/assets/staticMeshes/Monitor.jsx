import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function Monitor({ setIsLoaded }) {
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
      setIsLoaded((prev) => prev + 1);
    }
  }, [monitor, setIsLoaded]);

  return (
    <>
      <primitive
        object={monitor}
        position={[-2, -1.6, -3]}
        rotation={[0, THREE.MathUtils.degToRad(270), 0]}
        scale={[0.03, 0.03, 0.03]}
      />
    </>
  );
}
