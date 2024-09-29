{
  /* <DescBox
        imgRatio={"square"}
        imgPath={"/projectDescAssets/game/levelDevilCloneBanner.gif"}
        title={"etc"}
        subTitle={"1 This is level devil clone game."}
        descNum={4}
        desc={[
          "Designed and implemented by something",
          "Unexpected obstacle",
          "What else",
          "What else",
        ]}
        sourceCodeLink={"#"}
        moveLink={"#"}
        accessMethod={"download"}
      /> */
}

export default function DescBox({
  imgRatio,
  imgPath,
  title,
  subTitle,
  descNum,
  desc = [],
  sourceCodeLink,
  moveLink,
  accessMethod,
}) {
  return (
    <>
      <div className={`border-b-2 border-gray-900 p-2 flex justify-around`}>
        <div className="w-1/2 flex justify-center">
          <img
            src={imgPath}
            alt="description img"
            className={`m-6 rounded shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-500
              ${imgRatio === "square" && "w-[350px] h-[350px]"}
              ${imgRatio === "landscape" && "w-[450px] h-[300px]"} 
              ${imgRatio === "portrait" && "w-[300px] h-[450px]"}
            `}
          />
        </div>
        <div className="w-1/2">
          <h1 style={{ color: "#2D2D2D" }} className="text-3xl m-5">
            {title}
          </h1>
          <h3 style={{ color: "#4A4A4A" }} className="text-lg m-5">
            {subTitle}
          </h3>
          <ul style={{ color: "#1E3A8A" }} className="ml-5 text-sm ">
            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
              <li className="inline mr-10 hover:text-blue-300 duration-200">
                Source Code
              </li>
            </a>
            <a href={moveLink} target="_blank" rel="noopener noreferrer">
              <li className="inline hover:text-blue-300 duration-200">
                {accessMethod === "download" && "Download"}
                {accessMethod === "playNow" && "Play Now"}
                {accessMethod === "website" && "Go To Website"}
              </li>
            </a>
          </ul>
          <ul style={{ color: "#6A6A6A" }} className="m-5 text-sm">
            {desc.slice(0, descNum).map((item, index) => (
              <li key={index} className="mb-2 before:content-['-'] before:mr-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
