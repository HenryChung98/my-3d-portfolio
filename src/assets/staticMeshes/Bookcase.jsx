import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function Bookcase({ onClick, setIsLoaded }) {
  const bookcase = useLoader(FBXLoader, "/meshes/bookcase.fbx");

  useEffect(() => {
    if (bookcase) {
      bookcase.traverse((child) => {
        if (child.isMesh) {
          if (
            child.material &&
            child.material.userData &&
            child.material.userData.normalCamera
          ) {
            delete child.material.userData.normalCamera;
          }

          const newMaterial = new THREE.MeshStandardMaterial({
            color: "#5b3e15",
            roughness: 0.7,
            metalness: 0.1,
          });

          child.material = newMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [bookcase]);

  return (
    <>
      <primitive
        object={bookcase}
        position={[4.15, -3.01, 0]}
        rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        scale={[0.055, 0.055, 0.055]}
        onClick={onClick}
      />
    </>
  );
}
