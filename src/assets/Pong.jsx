import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

function MovableBar({ barPosY }) {

  return (
    <mesh position={[-1.1, barPosY, 0.2]} rotation={[0, 0, 0]}>
      <planeGeometry args={[0.02, 0.2]} />
      <meshStandardMaterial color="#ffffff" roughness={0.5} emissive={"#ffffff"} emissiveIntensity={2}/>
    </mesh>
  );
}

function BouncingBall({ onRemove, barPosY }) {
  const [position, setPosition] = useState([0, 0.5, 0]);
  const [velocity, setVelocity] = useState([0.007, 0.007, 0]);

  useFrame(() => {
    setPosition((prevPos) => {
      let [x, y, z] = prevPos;
      let [vx, vy, vz] = velocity;

      if (y >= 1.77 || y <= 0.3) vy = -vy;
      if (x >= 1.3 || x <= -1.3) vx = -vx;

      const barX = -1.2; // 막대기의 x 좌표
      const barHeight = 0.2; // 막대기의 높이
      if (
        x <= barX && // 공이 막대기의 x 범위에 도달했는지 확인
        y >= barPosY - barHeight / 2 && // 공이 막대기의 상단과 하단 사이에 있는지 확인
        y <= barPosY + barHeight / 2
      ) {
        vx = -vx; // x 축 속도 반전
      }

      if (x < -1.3) {
        onRemove();
      }

      setVelocity([vx, vy, vz]);

      return [x + vx, y + vy, z];
    });
  });

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshStandardMaterial color="#ff6347" roughness={0.5} emissive={"#ff6347"} emissiveIntensity={2} />
    </mesh>
  );
}

export default function Pong() {
  const [showBall, setShowBall] = useState(true);
  const [barPosY, setBarPosY] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setBarPosY((prevY) => {
        if (event.key === "ArrowUp") {
          return Math.min(prevY + 0.05, 1.6);
        } else if (event.key === "ArrowDown") {
          return Math.max(prevY - 0.05, 0.45);
        }
        return prevY;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleRemove = () => {
    setShowBall(false);
    setTimeout(() => {
      setShowBall(true);
    }, 1000);
  };

  return (
    <>
      <MovableBar barPosY={barPosY} />
      {showBall && <BouncingBall onRemove={handleRemove} barPosY={barPosY} />}
    </>
  );
}
