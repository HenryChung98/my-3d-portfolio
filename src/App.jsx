// yellowCube, bookcase, coin, sword fbx are not supported

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

// html components
import Popups from "./assets/htmlComponents/popups.jsx";
import NavButtons from "./assets/htmlComponents/NavButtons.jsx";
import LoadingScreen from "./assets/htmlComponents/LoadingScreen.jsx";
import Instruction from "./assets/Instruction.jsx";

// static components
import Room from "./assets/staticMeshes/Room.jsx";
import Desk from "./assets/staticMeshes/Desk.jsx";
import Monitor from "./assets/staticMeshes/Monitor.jsx";
import Keyboard from "./assets/staticMeshes/Keyboard.jsx";
import Mouse from "./assets/staticMeshes/Mouse.jsx";
import Chair from "./assets/staticMeshes/Chair.jsx";
import TV from "./assets/staticMeshes/TV.jsx";
import Phone from "./assets/stationaryMeshes/Phone.jsx";
import Bookcase from "./assets/staticMeshes/Bookcase.jsx";
import YellowCube from "./assets/staticMeshes/YellowCube.jsx";
import Coins from "./assets/staticMeshes/Coins.jsx";
import Headset from "./assets/staticMeshes/Headset.jsx";
import Sword from "./assets/staticMeshes/Sword.jsx";
import Sofa from "./assets/staticMeshes/Sofa.jsx";
import RemoteController from "./assets/staticMeshes/RemoteController.jsx";

// stationary components
import Lights from "./assets/stationaryMeshes/Lights.jsx";
import Clock from "./assets/stationaryMeshes/texts/Clock.jsx";
import Name from "./assets/stationaryMeshes/texts/Name.jsx";

// dynamic components
import Ball from "./assets/DynamicMeshes/Ball.jsx";

export default function App() {
  const [lightOn, setLightOn] = useState(true);

  const lightOnFontColor = "#7a949c";
  const lightOffFontColor = "#9bdbfd";
  const fontEmissive = "green";
  const fontEmissiveIntensity = 5;

  const [isPopup, setIsPopup] = useState("loading");

  // --------------------camera handling when buttons clicked--------------------

  // to check meshes are rendered
  const [showLoading, setShowLoading] = useState(true);
  const [isMeshesLoaded, setIsMeshesLoaded] = useState(0);
  const meshTotal = 13;

  // to set button visiblity
  const [isZoomed, setIsZoomed] = useState(false);

  // to go back previous position when back button clicked
  const [prevCameraPos, setPrevCameraPos] = useState({ x: 2, y: 0, z: 2 });
  const [prevOrbitTarget, setPrevOrbitTarget] = useState({ x: 0, y: 0, z: 0 });

  // disable camera movement when zoom-in
  const [orbitMoveHandle, setOrbitMoveHandle] = useState({
    pan: true,
    zoom: true,
    rotate: true,
  });

  // instruction
  const [isInstruction, setIsInstruction] = useState(false);

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

    if (isMeshesLoaded == meshTotal) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [cameraRef, orbitRef, isMeshesLoaded]);

  // when buttons clicked
  function handleBtnClick(posX, posY, posZ, rotX, rotY, rotZ, popup) {
    setIsZoomed(true);
    setIsPopup(popup);

    setOrbitMoveHandle({ pan: false, zoom: false, rotate: false });
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
  const isWindowSizeLessThan500 = window.innerWidth < 500;
  return (
    <>
      {isWindowSizeLessThan500 ? (
        <div className="absolute top-1/2 left-1/2 z-50">
          mobile is not supported
        </div>
      ) : null}
      <main className="h-screen">
        {showLoading && (
          <LoadingScreen isLoaded={isMeshesLoaded} meshTotal={meshTotal} />
        )}
        {/* -------------------------buttons------------------------- */}
        {isZoomed && (
          <button
            className="absolute bottom-10 left-1/2 z-50 transform -translate-x-1/2 border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
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
        {/* nav buttons */}
        {!isZoomed && (
          <NavButtons
            lightOn={lightOn}
            aboutClick={() =>
              handleBtnClick(-3.5, 1.3, -2.5, -5, 1.3, -2.5, "about")
            }
            projectsClick={() =>
              handleBtnClick(-2, -1, -2.7, -2, -1, -5, "projects")
            }
            skillsClick={() =>
              handleBtnClick(1.5, -1, -0.6, 6, -1, 1, "skills")
            }
            contactClick={() =>
              handleBtnClick(-3, -1, -2.2, -2.8, -2, -2.7, "contact")
            }
          />
        )}
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
            onClick={() => setIsInstruction(!isInstruction)}
          >
            {lightOn ? (
              <IoIosHelpCircleOutline size={30} />
            ) : (
              <IoIosHelpCircle size={30} />
            )}
          </button>
        </div>
        {/* -------------------------/buttons------------------------- */}
        <Popups popups={isPopup} />
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
          {isInstruction && <Instruction />}

          <Lights lightOn={lightOn} />
          <OrbitControls
            ref={orbitRef}
            enablePan={orbitMoveHandle.pan}
            enableZoom={orbitMoveHandle.zoom}
            enableRotate={orbitMoveHandle.rotate}
            target={[prevOrbitTarget.x, prevOrbitTarget.y, prevOrbitTarget.z]}
          />
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
          <Phone setIsLoaded={setIsMeshesLoaded} isPopup={isPopup} />
          {/* -------------------------/stationary------------------------- */}

          {/* -------------------------static------------------------- */}
          <Room />
          <Desk />
          <Sofa />
          <RemoteController
            setIsLoaded={setIsMeshesLoaded}
            onClick={() => handleBtnClick(2.5, -0.95, 2.6, 2.5, -0.95, 5, "tv")}
          />
          <Monitor setIsLoaded={setIsMeshesLoaded} />
          <Keyboard setIsLoaded={setIsMeshesLoaded} />
          <Mouse setIsLoaded={setIsMeshesLoaded} />
          <Chair setIsLoaded={setIsMeshesLoaded} />
          <TV setIsLoaded={setIsMeshesLoaded} isPopup={isPopup} />
          <Bookcase setIsLoaded={setIsMeshesLoaded} />
          <YellowCube setIsLoaded={setIsMeshesLoaded} />
          <Coins setIsLoaded={setIsMeshesLoaded} />
          <Headset setIsLoaded={setIsMeshesLoaded} />
          <Sword setIsLoaded={setIsMeshesLoaded} />
          {/* -------------------------/static------------------------- */}

          {/* -------------------------dynamic------------------------- */}
          <Ball />
          {/* -------------------------/dynamic------------------------- */}
        </Canvas>
      </main>
    </>
  );
}
