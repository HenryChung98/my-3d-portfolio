import DescBox from "./DescBox";

export default function EtcProjects() {
  return (
    <>
      <DescBox
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
      />
      <DescBox
        imgRatio={true}
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
        accessMethod={false}
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
        sourceCodeLink={"#"}
        moveLink={"#"}
        accessMethod={true}
      />
    </>
  );
}
