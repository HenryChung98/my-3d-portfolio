import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

// icons
import {
  IoIosHelpCircle,
  IoIosHelpCircleOutline,
  IoIosSunny,
  IoIosMoon,
  IoMdCloseCircleOutline,
  IoMdCloseCircle,
} from "react-icons/io";

import Popups from "./assets/htmlComponents/popups.jsx";

// static components
import Room from "./assets/staticMeshes/Room.jsx";
import Desk from "./assets/staticMeshes/Desk.jsx";
import Monitor from "./assets/staticMeshes/Monitor.jsx";
import Keyboard from "./assets/staticMeshes/Keyboard.jsx";
import Mouse from "./assets/staticMeshes/Mouse.jsx";
import Chair from "./assets/staticMeshes/Chair.jsx";
import TV from "./assets/staticMeshes/TV.jsx";
import Phone from "./assets/staticMeshes/Phone.jsx";

// stationary components
import Lights from "./assets/stationaryMeshes/Lights.jsx";
import Clock from "./assets/stationaryMeshes/texts/Clock.jsx";
import Name from "./assets/stationaryMeshes/texts/Name.jsx";

export default function App() {
  const [lightOn, setLightOn] = useState(true);

  const lightOnFontColor = "#7a949c";
  const lightOffFontColor = "#9bdbfd";
  const fontEmissive = "green";
  const fontEmissiveIntensity = 5;

  const [isPopup, setIsPopup] = useState("loading");

  // --------------------camera handling when buttons click--------------------

  // to set button visiblity
  const [isZoomed, setIsZoomed] = useState(false);

  // to go back previous position when back button clicked
  const [prevCameraPos, setPrevCameraPos] = useState({ x: 2, y: 0, z: 2 });
  const [prevOrbitTarget, setPrevOrbitTarget] = useState({ x: 0, y: 0, z: 0 });
  // unable to move camera when zoom-in
  const [orbitMoveHandle, setOrbitMoveHandle] = useState({
    pan: true,
    zoom: true,
    rotate: true,
  });

  const cameraRef = useRef();
  const orbitRef = useRef();
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.updateProjectionMatrix();
    }
    if (orbitRef.current) {
      orbitRef.current.target.set(0, 0, 0);
      orbitRef.current.update();
    }
  }, [cameraRef]);

  // when buttons clicked
  function handleBtnClick(posX, posY, posZ, rotX, rotY, rotZ, popup) {
    setIsZoomed(true);
    setIsPopup(popup);

    // setOrbitMoveHandle({ pan: false, zoom: false, rotate: false });
    setPrevCameraPos({
      x: cameraRef.current.position.x,
      y: cameraRef.current.position.y,
      z: cameraRef.current.position.z,
    });

    setPrevOrbitTarget({
      x: orbitRef.current.target.x,
      y: orbitRef.current.target.y,
      z: orbitRef.current.target.z,
    });
    gsap.to(cameraRef.current.position, {
      x: posX,
      y: posY,
      z: posZ,
      duration: 1,
    });
    gsap.to(orbitRef.current.target, {
      x: rotX,
      y: rotY,
      z: rotZ,
      duration: 1,
    });
  }
  // when back button click
  function handleBack() {
    setIsZoomed(false);

    setIsPopup("");

    gsap.to(cameraRef.current.position, {
      x: prevCameraPos.x,
      y: prevCameraPos.y,
      z: prevCameraPos.z,
      duration: 1,
    });
    gsap.to(orbitRef.current.target, {
      x: prevOrbitTarget.x,
      y: prevOrbitTarget.y,
      z: prevOrbitTarget.z,
      duration: 1,
    });

    setOrbitMoveHandle({ pan: true, zoom: true, rotate: true });
  }

  // --------------------/camera handling when buttons clicked--------------------

  return (
    <>
      <main className="h-screen">
        {/* -------------------------buttons------------------------- */}
        {isZoomed && (
          <button
            className=" absolute bottom-10 left-1/2 z-20 transform -translate-x-1/2m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
            style={{ color: lightOn ? "black" : "white" }}
            onClick={() => handleBack()}
          >
            {lightOn ? (
              <IoMdCloseCircleOutline size={30} />
            ) : (
              <IoMdCloseCircle size={30} />
            )}
          </button>
        )}
        {!isZoomed && (
          <div className="absolute top-0 right-0 flex justify-center z-20">
            <button
              className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
              style={{ color: lightOn ? "black" : "white", width: "110px" }}
              onClick={() => handleBtnClick(-3.5, 1.3, -2.5, -5, 1.3, -2.5, "about")}
            >
              About me
            </button>
            <button
              className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
              style={{ color: lightOn ? "black" : "white", width: "110px" }}
              onClick={() => handleBtnClick(-2, -1.1, -2.7, -2, -1.1, -5, "projects")}
            >
              Projects
            </button>
            <button
              className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
              style={{ color: lightOn ? "black" : "white", width: "110px" }}
              onClick={() => handleBtnClick(2, -1.5, 1.5, 6, 0, -2, "skills")}
            >
              Skills
            </button>
            <button
              className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
              style={{ color: lightOn ? "black" : "white", width: "110px" }}
              onClick={() => handleBtnClick(-3, -1, -2.2, -2.8, -2, -2.7, "contact")}
            >
              Contact
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
        )}
        <Popups popups={isPopup} />
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
        {/* -------------------------/buttons------------------------- */}
        <Canvas
          shadows
          camera={{
            fov: 70,
            position: [prevCameraPos.x, prevCameraPos.y, prevCameraPos.z],
          }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
        >
          <Lights lightOn={lightOn} />
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
          <Desk />
          <Monitor />
          <Keyboard />
          <Mouse />
          <Chair />
          <TV />
          <Phone />
          {/* -------------------------static------------------------- */}
          <OrbitControls
            ref={orbitRef}
            enablePan={orbitMoveHandle.pan}
            enableZoom={orbitMoveHandle.zoom}
            enableRotate={orbitMoveHandle.rotate}
            target={[prevOrbitTarget.x, prevOrbitTarget.y, prevOrbitTarget.z]}
          />
          <axesHelper />
        </Canvas>
      </main>
    </>
  );
}
