function DescBox({
  isLast,
  isPerfectSquare,
  imgPath,
  title,
  subTitle,
  descNum,
  desc = [],
  sourceCodeLink,
  moveLink,
  isDownload,
}) {
  return (
    <>
      <div
        className={`${
          !isLast && "border-b-2 border-gray-900"
        } p-2 flex justify-around`}
      >
        <div className="w-1/2 flex justify-center">
          <img
            src={imgPath}
            alt="description GIF"
            className={`m-6 ${
              isPerfectSquare ? "w-[220px] h-[220px]" : "w-[300px] h-[170px]"
            }`}
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
                {isDownload ? "Download" : "Play Online"}
              </li>
            </a>
          </ul>
          <ul
            style={{ color: "#6A6A6A" }}
            className="m-5 text-sm text-gray-600"
          >
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
export default function ProjectDesc() {
  return (
    <>
      <div className="fixed top-0 flex flex-col gap-5 m-20 p-5 w-2/3 min-w-[700px] rounded">
        <DescBox
          isPerfectSquare={false}
          imgPath={"/projectDescAssets/levelDevilCloneBanner.gif"}
          title={"Level Devel Clone 1"}
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
          isDownload={true}
        />
        <DescBox
          isPerfectSquare={true}
          imgPath={"/projectDescAssets/player-right.png"}
          title={"Level Devel Clone"}
          subTitle={"This is level devil clone game."}
          descNum={4}
          desc={[
            "Designed and implemented by something",
            "Unexpected obstacle",
            "What else",
            "What else",
          ]}
          sourceCodeLink={"#"}
          moveLink={"#"}
          isDownload={false}
        />
        <DescBox
          imgPath={"/projectDescAssets/player-right.png"}
          title={
            "long title long titlelong titlelong titlelong titlelong titlelong title"
          }
          subTitle={"This is level devil clone game."}
          descNum={7}
          desc={[
            "Designed and implemented by something",
            "Unexpected obstacle",
            "Unexpected obstacle",
            "Unexpected obstacle",
            "Unexpected obstacle",
            "Unexpected obstacle",
            "Unexpected obstacle",
          ]}
          isLast={true}
          sourceCodeLink={"#"}
          moveLink={"#"}
          isDownload={true}
        />
        <div className="text-center p-10"></div>
      </div>
    </>
  );
}
