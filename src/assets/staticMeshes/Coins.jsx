import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function Coins({ setIsLoaded }) {
  const coins = useLoader(FBXLoader, "/meshes/coins.fbx");

  useEffect(() => {
    if (coins) {
      coins.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#fae102",
            roughness: 0.5,
            metalness: 0.9,
          });
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [coins]);

  return (
    <>
      <primitive
        object={coins}
        position={[4.6, -2.92, -1]}
        rotation={[0, THREE.MathUtils.degToRad(270), 0]}
        scale={[0.04, 0.04, 0.04]}

      />
    </>
  );
}
