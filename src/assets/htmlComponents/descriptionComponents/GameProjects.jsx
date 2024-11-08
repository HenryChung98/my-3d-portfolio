import DescBox from "./DescBox";

export default function GameProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/rotationRushBanner.webp"}
        title={"Rotation Rush"}
        subTitle={
          "Endless game with screen-spinning twists and obstacle dodging"
        }
        descNum={2}
        desc={["Endless gameplay", "Challenging obstacle"]}
        sourceCodeLink={"https://github.com/HenryChung98/RotationRush"}
        moveLink={"https://9henrychung8.itch.io/rotation-rush"}
        accessMethod={"playNow"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/infiniteScrollBanner.webp"}
        title={"Infinite Scroll"}
        subTitle={
          "An endless runner where players dodge obstacles while collecting coins"
        }
        descNum={3}
        desc={["Endless gameplay", "Challenging obstacle", "Collect coins"]}
        sourceCodeLink={""}
        moveLink={"#"}
        accessMethod={""}
      />
      <DescBox
        imgRatio={"portrait"}
        imgPath={"/projectDescAssets/game/flappyBirdCloneBanner.webp"}
        title={"Flappy Bird Clone"}
        subTitle={"A minimalist clone of the classic Flappy Bird game"}
        descNum={2}
        desc={["Endless gameplay", "Challenging obstacle"]}
        sourceCodeLink={"https://github.com/HenryChung98/Flappy-Bird-Clone"}
        moveLink={"#"}
        accessMethod={"download"}
      />
      <DescBox
        imgRatio={"square"}
        imgPath={"/projectDescAssets/game/mouseAccuracyBanner.webp"}
        title={"Mouse Accuracy Training"}
        subTitle={"Mouse training for shooting games"}
        descNum={3}
        desc={[
          "Precision shooting drills",
          "Reaction time test",
          "or endless gameplay",
        ]}
        sourceCodeLink={
          "https://github.com/HenryChung98/mouse-accuracy-training"
        }
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/levelDevilCloneBanner.webp"}
        title={"Level Devel Clone"}
        subTitle={"1 This is level devil clone game."}
        descNum={3}
        desc={[
          "Multiple stages",
          "Unexpected obstacle",
          "Goal door to move next stage",
        ]}
        sourceCodeLink={
          "https://henrychung98.github.io/project/levelDevilClone1/"
        }
        moveLink={"https://9henrychung8.itch.io/level-devil-clone"}
        accessMethod={"download"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/liarGameBanner.webp"}
        title={"Liar Game"}
        subTitle={"Liar game application developed by JavaScript"}
        descNum={1}
        desc={["Simple psychological game"]}
        sourceCodeLink={"https://github.com/HenryChung98/liar-game"}
        moveLink={"https://henrychung98.github.io/liar-game/"}
        accessMethod={"playNow"}
      />
    </>
  );
}
