import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function YellowCube({ setIsLoaded }) {
  const yellowCube = useLoader(FBXLoader, "/meshes/yellowCube.fbx");

  useEffect(() => {
    if (yellowCube) {
      yellowCube.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set("#f9e135");
          child.material.roughness = 0.3;
          child.material.metalness = 0.2;

          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [yellowCube]);

  return (
    <>
      <primitive
        object={yellowCube}
        position={[3.31, -3.05, 1]}
        rotation={[0, THREE.MathUtils.degToRad(0), 0]}
        scale={[0.03, 0.03, 0.03]}
      />
    </>
  );
}
