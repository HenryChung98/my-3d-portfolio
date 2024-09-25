import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Html } from "@react-three/drei";

const InteractiveMesh = React.forwardRef(
  (
    {
      position,
      text,
      onClick,
      fontColor,
      emissive,
      emissiveIntensity,
      boxColor,
      boxHovered,
      boxEmissive,
      boxEmissiveIntensity,
    },
    ref
  ) => {
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
      <mesh
        ref={ref}
        scale={0.3}
        onClick={() => {
          setActive(!active);
          if (onClick) onClick();
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={position}
      >
        {hovered && (
          <Text3D
            font="/fonts/Poppins_Bold.json"
            position={[-1.5, 2, 0]}
            size={0.3}
            height={0.1}
          >
            {text}
            <meshStandardMaterial
              color={fontColor}
              emissive={emissive}
              emissiveIntensity={emissiveIntensity}
            />
          </Text3D>
        )}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? boxHovered : boxColor}
          emissive={boxEmissive}
          emissiveIntensity={boxEmissiveIntensity}
        />
      </mesh>
    );
  }
);

export default function Instruction({
  fontColor,
  emissive,
  emissiveIntensity,
  boxColor,
  boxHovered,
  boxEmissive,
  boxEmissiveIntensity,
}) {
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();

  // 첫 번째 메쉬 회전
  useFrame((state, delta) => {
    if (meshRef1.current) meshRef1.current.rotation.x += delta;
  });

  // 두 번째 메쉬 이동
  const directionRef = useRef(1);
  useFrame((state, delta) => {
    if (meshRef2.current) {
      meshRef2.current.position.x += directionRef.current * delta;
      if (meshRef2.current.position.x < -1.2) directionRef.current = 0.3;
      else if (meshRef2.current.position.x > -0.8) directionRef.current = -0.3;
    }
  });

  // 세 번째 메쉬 스케일 조정
  const scaleRef = useRef(0.3);
  const growingRef = useRef(true);
  useFrame((state, delta) => {
    if (meshRef3.current) {
      scaleRef.current += growingRef.current ? delta * 0.2 : -delta * 0.2;
      if (scaleRef.current >= 0.5) growingRef.current = false;
      else if (scaleRef.current <= 0.3) growingRef.current = true;
      meshRef3.current.scale.set(
        scaleRef.current,
        scaleRef.current,
        scaleRef.current
      );
    }
  });

  return (
    <>
      <InteractiveMesh
        ref={meshRef1}
        position={[0, 0, 0]}
        text="Left-Click to Rotate"
        fontColor={fontColor}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        boxColor={boxColor}
        boxHovered={boxHovered}
        boxEmissive={boxEmissive}
        boxEmissiveIntensity={boxEmissiveIntensity}
      />
      <InteractiveMesh
        ref={meshRef2}
        position={[-0.8, 0, 0]}
        text="Right-Click to Move"
        fontColor={fontColor}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        boxColor={boxColor}
        boxHovered={boxHovered}
        boxEmissive={boxEmissive}
        boxEmissiveIntensity={boxEmissiveIntensity}
      />
      <InteractiveMesh
        ref={meshRef3}
        position={[1, 0, 0]}
        text="Scroll to Zoom-in / out"
        fontColor={fontColor}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        boxColor={boxColor}
        boxHovered={boxHovered}
        boxEmissive={boxEmissive}
        boxEmissiveIntensity={boxEmissiveIntensity}
      />
      <Html position={[-3.5, -1, 0.5]}>
        <div
          style={{ color: "white", backgroundColor: "black", padding: "5px" }}
        >
          Contact
        </div>
      </Html>
      <Html position={[-2.3, 0, -1]}>
        <div
          style={{ color: "white", backgroundColor: "black", padding: "5px" }}
        >
          Projects
        </div>
      </Html>
      <Html position={[-5, 2, -1]}>
        <div
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "5px",
            width: "87px",
          }}
        >
          About Me
        </div>
      </Html>
      <Html position={[3.3, -1.5, 2.5]}>
        <div
          style={{ color: "white", backgroundColor: "black", padding: "5px" }}
        >
          Skills
        </div>
      </Html>
      {/* <Html position={[0, 10, 2.5]}>
        <div
          style={{ color: "white", backgroundColor: "black", padding: "5px" }}
        >
          Easter eggs might be hidden..
        </div>
      </Html> */}
    </>
  );
}
