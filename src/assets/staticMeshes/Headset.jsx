import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";

export default function Headset({ onClick, setIsLoaded }) {
  const headset = useLoader(FBXLoader, "/meshes/headset.fbx");

  useEffect(() => {
    if (headset) {
      headset.traverse((child) => {
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
  }, [headset]);

  return (
    <>
      <primitive
        object={headset}
        position={[4.77, -0.8, -1.145]}
        rotation={[
          THREE.MathUtils.degToRad(150),
          THREE.MathUtils.degToRad(228),
          THREE.MathUtils.degToRad(160),
        ]}
        scale={[0.035, 0.035, 0.035]}
        onClick={onClick}
      />
    </>
  );
}
