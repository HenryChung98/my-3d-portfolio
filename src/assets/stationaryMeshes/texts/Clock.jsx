import { Text3D } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";

export default function Clock({ fontColor, emissive, emissiveIntensity }) {
  // room
  const roomWidth = 10;
  const roomHeight = 5;
  const roomDepth = 10;

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");

      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Text3D
        font="/fonts/Poppins_Bold.json"
        position={[0, 1, roomDepth / 2 -0.01]}
        rotation={[0, THREE.MathUtils.degToRad(180), 0]}
        size={0.3}
        height={0.1}
      >
        {time || "00:00"}
        <meshStandardMaterial
          color={fontColor}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </Text3D>
    </>
  );
}
