import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import * as THREE from "three";


export default function Phone({ onClick }) {
  const phone = useLoader(FBXLoader, "/meshes/phone.fbx");

  useEffect(() => {
    if (phone) {
      phone.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
    }
  }, [phone]);

  return (
    <>
      <primitive
        object={phone}
        position={[-3.1, -1.6, -2.5]}
        rotation={[0, THREE.MathUtils.degToRad(280), 0]}
        scale={[0.02, 0.02, 0.02]}
        onClick={onClick}
      />
    </>
  );
}
