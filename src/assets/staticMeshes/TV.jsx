import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

import Pong from "../Pong";

export default function TV({ isPopup, setIsLoaded }) {
  const tv = useLoader(FBXLoader, "/meshes/tv.fbx");
  const tvShelf = useLoader(FBXLoader, "/meshes/tvShelf.fbx");

  useEffect(() => {
    if (tvShelf) {
      tvShelf.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#754f12",
            roughness: 0.7,
            metalness: 0.1,
          });
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
    if (tv) {
      tv.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#000000",
            roughness: 0.7,
            metalness: 0.2,
          });
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [tvShelf, tv]);

  return (
    <>
      <group
        position={[2.5, -1.9, 4]}
        rotation={[0, THREE.MathUtils.degToRad(180), 0]}
      >
        <primitive
          object={tvShelf}
          scale={[0.025, 0.025, 0.025]}
          position={[-2.2, -1.09, 0.8]}
        ></primitive>
        <primitive
          object={tv}
          scale={[0.008, 0.008, 0.008]}
          position={[0, 0, 0]}
        ></primitive>
        {isPopup === "tv" && (<Pong />)}
      </group>
    </>
  );
}
