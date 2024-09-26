import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function Sword({ setIsLoaded }) {
  const sword = useLoader(FBXLoader, "/meshes/sword.fbx");

  useEffect(() => {
    if (sword) {
      sword.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#ff0000",
            roughness: 0.2,
            metalness: 0.7,
          });
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [sword]);

  return (
    <>
      <primitive
        object={sword}
        position={[4.38, -1.41, 1.2]}
        rotation={[
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(330),
          THREE.MathUtils.degToRad(70),
        ]}
        scale={[0.15, 0.15, 0.15]}
      />
    </>
  );
}
