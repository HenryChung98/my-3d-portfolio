import DescBox from "./DescBox";

export default function WebProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/auctionBanner.webp"}
        title={"E-Commerce Website"}
        subTitle={"A Platform for e-commerce store"}
        descNum={1}
        desc={["An intuitive auction platform built to simplify bidding"]}
        sourceCodeLink={"https://github.com/HenryChung98/e-commerce-website"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/auctionBanner.webp"}
        title={"Auction Website(Role: Backend)"}
        subTitle={"A Platform for Competitive Bidders"}
        descNum={1}
        desc={["An intuitive auction platform built to simplify bidding"]}
        sourceCodeLink={"https://github.com/timdonato/csis3380-final"}
        moveLink={"https://csis3380-final.netlify.app/"}
        accessMethod={"website"}
      />
      <DescBox
        imgRatio={"landscape"}
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
        sourceCodeLink={"https://github.com/HenryChung98/personal-blog"}
      />
      <DescBox
        imgRatio={"portrait"}
        imgPath={"/projectDescAssets/web/todoListBanner.webp"}
        title={"To-Do-List"}
        subTitle={"Simple To-Do-List application"}
        descNum={2}
        desc={["Task Management", "Checklists"]}
        sourceCodeLink={"https://github.com/HenryChung98/to-do-list-practice"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/liarGameBanner.webp"}
        title={"Liar Game"}
        subTitle={"Liar game application developed by JavaScript"}
        descNum={1}
        desc={["Simple sychological game with just a few touches"]}
        sourceCodeLink={"https://github.com/HenryChung98/liar-game"}
        moveLink={"https://henrychung98.github.io/liar-game/"}
        accessMethod={"website"}
      />
      <DescBox
        imgRatio={"landscape"}
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
