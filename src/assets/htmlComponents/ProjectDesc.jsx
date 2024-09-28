// when convert to gif
// size: original(up to 600px)
// frame rate(FPS): 20(max 15 seconds)
// method: FFMPEG
import { useState } from "react";

import GameProjects from "./descriptionComponents/GameProjects";
import WebProjects from "./descriptionComponents/WebProjects";
import EtcProjects from "./descriptionComponents/EtcProjects";

export default function ProjectDesc() {
  const [isSelected, setIsSelected] = useState("game");
  const handleClick = (selected) => {
    setIsSelected(selected);
  };

  return (
    <>
      <div className="fixed top-0 flex flex-col gap-5 m-20 p-5 w-2/3 min-w-[700px] rounded">
        <div className="flex gap-10 justify-center align-center">
          <button
            style={{ backgroundColor: "#D2B48C", color: "#4A4A4A" }}
            className={`${
              isSelected == "game" && "opacity-50"
            } rounded p-2 w-[70px] hover:opacity-50 duration-300`}
            onClick={() => handleClick("game")}
          >
            GAME
          </button>
          <button
            style={{ backgroundColor: "#D2B48C", color: "#4A4A4A" }}
            className={`${
              isSelected == "web" && "opacity-50"
            } rounded p-2 w-[70px] hover:opacity-50 duration-300`}
            onClick={() => handleClick("web")}
          >
            WEB
          </button>
          <button
            style={{ backgroundColor: "#D2B48C", color: "#4A4A4A" }}
            className={`${
              isSelected == "etc" && "opacity-50"
            } rounded p-2 w-[70px] hover:opacity-50 duration-300`}
            onClick={() => handleClick("etc")}
          >
            ETC
          </button>
        </div>
        {isSelected == "game" && (
          <>
            <GameProjects />
          </>
        )}
        {isSelected == "web" && (
          <>
            <WebProjects />
          </>
        )}
        {isSelected == "etc" && (
          <>
            <EtcProjects />
          </>
        )}
        <div className="text-center p-10"></div>
      </div>
    </>
  );
}
