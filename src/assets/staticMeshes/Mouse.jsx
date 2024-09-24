import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";


export default function Mouse({ onClick, setIsLoaded }) {
  const mouse = useLoader(FBXLoader, "/meshes/mouse.fbx");

  useEffect(() => {
    if (mouse) {
      mouse.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [mouse]);

  return (
    <>
      <primitive
        object={mouse}
        position={[-1.3, -1.6, -2.5]}
        rotation={[0, THREE.MathUtils.degToRad(30), 0]}
        scale={[0.002, 0.002, 0.002]}
        onClick={onClick}
      />
    </>
  );
}
