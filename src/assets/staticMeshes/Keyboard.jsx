import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";


export default function Keyboard({ setIsLoaded }) {
  const keyboard = useLoader(FBXLoader, "/meshes/keyboard.fbx");

  useEffect(() => {
    if (keyboard) {
      keyboard.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [keyboard]);

  return (
    <>
      <primitive
        object={keyboard}
        position={[-1.98, -1.6, -2.4]}
        rotation={[0, THREE.MathUtils.degToRad(0), 0]}
        scale={[0.03, 0.03, 0.03]}
      />
    </>
  );
}
