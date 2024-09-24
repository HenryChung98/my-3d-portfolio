import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function RemoteController({ onClick, setIsLoaded }) {
  const remoteController = useLoader(FBXLoader, "/meshes/remoteController.fbx");

  useEffect(() => {
    if (remoteController) {
      remoteController.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: "#2a2a2a",
            roughness: 0.5,
            metalness: 0.1,
          });
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [remoteController]);

  return (
    <>
      <primitive
        object={remoteController}
        position={[1.2, -2.45, -4.4]}
        rotation={[
          THREE.MathUtils.degToRad(180),
          THREE.MathUtils.degToRad(270),
          THREE.MathUtils.degToRad(180),
        ]}
        scale={[0.03, 0.03, 0.03]}
        onClick={onClick}
      />
    </>
  );
}
