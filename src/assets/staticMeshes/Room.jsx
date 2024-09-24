import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export default function Room() {
  const floorTexture = useLoader(TextureLoader, "/textures/floor.jpg");

  // room
  const roomWidth = 10;
  const roomHeight = 6;
  const roomDepth = 10;

  // window
  const windowWidth = 3;
  const windowHeight = 2;
  const windowDepth = 0.2;

  // for outside of window
  const frameOffset = 0.1;
  const innerWindowWidth = windowWidth - frameOffset * 2;
  const innerWindowHeight = windowHeight - frameOffset * 2;

  // door
  const doorFrameOffset = 0.3;
  const doorWidth = 2.5;
  const doorHeight = 4;
  const doorDepth = 0.1;

  return (
    <>
      <group>
        {/* Floor */}
        <mesh
          position={[0, -roomHeight / 2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[roomWidth, roomDepth]} />
          <meshStandardMaterial
            color="#bca390"
            roughness={0.5}
            side={THREE.DoubleSide}
            map={floorTexture}
          />
        </mesh>

        {/* Ceiling */}
        <mesh
          position={[0, roomHeight / 2, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[roomWidth, roomDepth]} />
          <meshStandardMaterial
            color="#c2f0ff"
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Back Wall */}
        <mesh position={[0, 0, -roomDepth / 2]} receiveShadow>
          <planeGeometry args={[roomWidth, roomHeight]} />
          <meshStandardMaterial
            color="#c2f0ff"
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Front Wall */}
        <mesh
          position={[0, 0, roomDepth / 2]}
          rotation={[0, Math.PI, 0]}
          receiveShadow
        >
          <planeGeometry args={[roomWidth, roomHeight]} />
          <meshStandardMaterial
            color="#c2f0ff"
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Left Wall */}
        <mesh
          position={[-roomWidth / 2, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          receiveShadow
        >
          <planeGeometry args={[roomDepth, roomHeight]} />
          <meshStandardMaterial
            color="#c2f0ff"
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Right Wall */}
        <mesh
          position={[roomWidth / 2, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          receiveShadow
        >
          <planeGeometry args={[roomDepth, roomHeight]} />
          <meshStandardMaterial
            color="#c2f0ff"
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
      <group>
        {/* Window Frame */}
        <mesh
          position={[0, 1, -roomDepth / 2 + windowDepth / 2 - 0.1]}
          receiveShadow
        >
          <boxGeometry args={[windowWidth, windowHeight, windowDepth]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        <mesh
          position={[0, 1, -roomDepth / 2 + windowDepth / 2 - 0.05]}
          receiveShadow
        >
          <boxGeometry args={[innerWindowWidth, innerWindowHeight, 0.2]} />
          <meshStandardMaterial color="aqua" />
        </mesh>
      </group>

      <group position={[-0.5, -0.5, 0]}>
        {/* Door Frame */}
        <mesh
          position={[-doorWidth, -roomHeight + 5.5, roomDepth / 2 + 0.01]}
          receiveShadow
        >
          <boxGeometry args={[doorWidth, doorHeight, 0.2]} />
          <meshStandardMaterial color="#48310e" />
        </mesh>

        {/* Door Panel */}
        <mesh
          position={[-doorWidth, -roomHeight + 5.5, roomDepth / 2 - 0.02]}
          receiveShadow
        >
          <boxGeometry
            args={[
              doorWidth - doorFrameOffset,
              doorHeight - doorFrameOffset,
              0.2,
            ]}
          />
          <meshStandardMaterial color="#977029" />
        </mesh>

        {/* Door Knob */}
        <mesh
          position={[-doorWidth - 1, -0.5, roomDepth / 2 - 0.2]}
          receiveShadow
        >
          <sphereGeometry args={[0.05, 40, 40]} />
          <meshStandardMaterial color="gold" />
        </mesh>
      </group>
    </>
  );
}
