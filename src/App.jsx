import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { gsap } from "gsap";

// icons
import {
  IoIosHelpCircle,
  IoIosHelpCircleOutline,
  IoIosSunny,
  IoIosMoon,
} from "react-icons/io";

// static components
import Room from "./assets/staticMeshes/Room.jsx";

// stationary components
import DirectionalLights from "./assets/stationaryMeshes/DirectionalLights.jsx";
import Clock from "./assets/stationaryMeshes/texts/Clock.jsx";
import Name from "./assets/stationaryMeshes/texts/Name.jsx";

export default function App() {
  const [lightOn, setLightOn] = useState(true);

  const cameraRef = useRef();
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.updateProjectionMatrix();
    }
  }, [cameraRef]);

  function handleBtnClick(x, y, z) {
    gsap.to(cameraRef.current.position, {
      x: x,
      y: y,
      z: z,
      duration: 1,
      onStart: () => {
        camera.updateProjectionMatrix();
      },
    });
    // orbitcontrol target 바꿔야됨!!!
  }

  const lightOnFontColor = "#7a949c";
  const lightOffFontColor = "#9bdbfd";
  const fontEmissive = "green";
  const fontEmissiveIntensity = 5;

  return (
    <>
      <main className="h-screen">
        {/* -------------------------buttons------------------------- */}

        <div className="absolute top-0 right-0 flex justify-center z-20">
          <button
            className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
            style={{ color: lightOn ? "black" : "white", width: "110px" }}
            onClick={() => handleBtnClick(2, -2, -2)}
          >
            About me
          </button>
          <a
            href="/Henry_Chung_Resume_GameDev.pdf"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
              style={{ color: lightOn ? "black" : "white", width: "110px" }}
            >
              Resume
            </button>
          </a>
          <a
            href="https://henrychung98.github.io/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
              style={{ color: lightOn ? "black" : "white", width: "110px" }}
            >
              Blog
            </button>
          </a>
        </div>
        <div className="absolute top-0 left-0 flex flex-col justify-center z-20">
          <button
            style={{ color: lightOn ? "black" : "white" }}
            className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
            onClick={() => setLightOn(!lightOn)}
          >
            {lightOn ? <IoIosSunny size={30} /> : <IoIosMoon size={30} />}
          </button>
          <button
            style={{ color: lightOn ? "black" : "white" }}
            className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
          >
            {lightOn ? (
              <IoIosHelpCircleOutline size={30} />
            ) : (
              <IoIosHelpCircle size={30} />
            )}
          </button>
        </div>
        {/* -------------------------buttons------------------------- */}
        <Canvas
          shadows
          camera={{
            fov: 70,
            position: [2, 0, 2],
          }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
        >
          <ambientLight intensity={lightOn ? 1.5 : 0.1} />
          <DirectionalLights lightOn={lightOn} />
          {/* -------------------------stationary------------------------- */}
          <Clock
            fontColor={lightOn ? lightOnFontColor : lightOffFontColor}
            emissive={lightOn ? "" : fontEmissive}
            emissiveIntensity={lightOn ? "" : fontEmissiveIntensity}
          />
          <Name
            fontColor={lightOn ? lightOnFontColor : lightOffFontColor}
            emissive={lightOn ? "" : fontEmissive}
            emissiveIntensity={lightOn ? "" : fontEmissiveIntensity}
          />
          {/* -------------------------stationary------------------------- */}
          {/* -------------------------static------------------------- */}
          <Room />
          {/* -------------------------static------------------------- */}
          <OrbitControls />
          <axesHelper />
        </Canvas>
      </main>
    </>
  );
}
