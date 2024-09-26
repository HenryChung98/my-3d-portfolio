import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";

export default function Ball() {
  const ref = useRef();
  const initialPosition = useRef([4.7, -1.5, -2]);
  const [targetPosition, setTargetPosition] = useState(initialPosition.current);
  const moveDistance = 0.1;
  const speed = 0.05;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;

      ref.current.position.x +=
        (targetPosition[0] - ref.current.position.x) * speed;
      ref.current.position.y +=
        (targetPosition[1] - ref.current.position.y) * speed;
      ref.current.position.z +=
        (targetPosition[2] - ref.current.position.z) * speed;
    }
  });

  const handleClick = (event) => {
    const { point } = event.intersections[0];
    const direction = [
      ref.current.position.x - point.x,
      ref.current.position.y - point.y,
      ref.current.position.z - point.z,
    ];
    const length = Math.sqrt(direction.reduce((sum, d) => sum + d * d, 0));

    if (length > 0) {
      const normalizedDirection = direction.map(
        (d) => (d / length) * moveDistance
      );
      setTargetPosition([
        ref.current.position.x + normalizedDirection[0],
        ref.current.position.y + normalizedDirection[1],
        ref.current.position.z + normalizedDirection[2],
      ]);

      setTimeout(() => {
        setTargetPosition(initialPosition.current);
      }, 300);
    }
  };

  return (
    <>
      <Sphere
        ref={ref}
        args={[1, 32, 32]}
        position={initialPosition.current}
        scale={[0.15, 0.15, 0.15]}
        onClick={handleClick}
      >
        <meshStandardMaterial attach="material" color="royalblue" />
      </Sphere>
      <Line
        points={[
          [4.7, -0.9, -2],
          [4.7, -1.6, -2],
        ]}
        color="white"
      />
    </>
  );
}
