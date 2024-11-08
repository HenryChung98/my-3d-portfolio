import DescBox from "./DescBox";

export default function WebProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/chatAppBanner.webp"}
        title={"Chat Application"}
        subTitle={"Real-time chat and messaging"}
        descNum={1}
        desc={[
          "A simple chat app featuring real-time messaging and easy connectivity",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/multi-player-games"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/ecommerceBanner.webp"}
        title={"E-Commerce Website"}
        subTitle={"A Platform for e-commerce store"}
        descNum={1}
        desc={[
          "A simple e-commerce website featuring a user-friendly interface",
        ]}
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
        imgPath={"/projectDescAssets/web/personalBlogBanner.webp"}
        title={"Personal Diary"}
        subTitle={"Simple personal blog application"}
        descNum={1}
        desc={["leave a short daily journal entry"]}
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
