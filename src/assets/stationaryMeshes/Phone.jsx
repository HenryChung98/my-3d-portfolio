import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useEffect } from "react";
import { Text3D } from "@react-three/drei";
import * as THREE from "three";

export default function Phone({ onClick, setIsLoaded, isPopup }) {
  const phone = useLoader(FBXLoader, "/meshes/phone.fbx");

  useEffect(() => {
    if (phone) {
      phone.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      setIsLoaded((prev) => prev + 1);
    }
  }, [phone]);

  return (
    <>
      <primitive
        object={phone}
        position={[-3.05, -1.6, -2.5]}
        rotation={[0, THREE.MathUtils.degToRad(270), 0]}
        scale={[0.02, 0.02, 0.02]}
        onClick={onClick}
      />
      {isPopup === "contact" && (
        <>
          <mesh
            position={[-3.05, -1.585, -2.5]}
            rotation={[
              THREE.MathUtils.degToRad(270),
              0,
              THREE.MathUtils.degToRad(270),
            ]}
            receiveShadow
          >
            <planeGeometry args={[0.3, 0.14]} />
            <meshStandardMaterial
              color="white"
              emissive="white"
              emissiveIntensity={1}
            />
          </mesh>
          <Text3D
            font="/fonts/Poppins_Bold.json"
            position={[-3.12, -1.585, -2.5]}
            rotation={[THREE.MathUtils.degToRad(270), 0, 0]}
            size={0.015}
            height={0.001}
          >
            Get In Touch!
            <meshStandardMaterial color="black" />
          </Text3D>
        </>
      )}
    </>
  );
}
