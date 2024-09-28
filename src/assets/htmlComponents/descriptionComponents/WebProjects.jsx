import DescBox from "./DescBox";

export default function WebProjects() {
  return (
    <>
      <DescBox
        isPerfectSquare={false}
        imgPath={"/projectDescAssets/game/levelDevilCloneBanner.gif"}
        title={"Personal Blog"}
        subTitle={"Simple personal blog application"}
        descNum={4}
        desc={[
          "Designed and implemented by something",
          "Unexpected obstacle",
          "What else",
          "What else",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/to-do-list-practice"}
        moveLink={"#"}
        accessMethod={"website"}
      />
      <DescBox
        isPerfectSquare={false}
        imgPath={"/projectDescAssets/game/levelDevilCloneBanner.gif"}
        title={"To-Do-List"}
        subTitle={"Simple To-Do-List application"}
        descNum={4}
        desc={[
          "Designed and implemented by something",
          "Unexpected obstacle",
          "What else",
          "What else",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/to-do-list-practice"}
        moveLink={"#"}
        accessMethod={"website"}
      />
      <DescBox
        isPerfectSquare={false}
        imgPath={"/projectDescAssets/web/liarGameBanner.webp"}
        title={"Liar Game"}
        subTitle={"Liar game application developed by JavaScript"}
        descNum={3}
        desc={["Simple sychological game with just a few touches"]}
        sourceCodeLink={"https://github.com/HenryChung98/liar-game"}
        moveLink={"https://henrychung98.github.io/liar-game/"}
        accessMethod={"website"}
      />
      <DescBox
        isPerfectSquare={false}
        imgPath={"/projectDescAssets/web/weatherAppBanner.webp"}
        title={"Weather App"}
        subTitle={"Simple weather application"}
        descNum={2}
        desc={[
          "Search for a city and check the current weather",
          "See the location as well",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/weather-app"}
      />
    </>
  );
}
