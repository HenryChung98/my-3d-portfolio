import DescBox from "./DescBox";

export default function EtcProjects() {
  return (
    <>
      <DescBox
        title={"File Manager"}
        subTitle={"1 This is level devil clone game."}
        descNum={1}
        desc={[
          "Organize your files"
        ]}
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/etc/fileManagerBanner.webp"}
        sourceCodeLink={"https://github.com/HenryChung98/file-manager"}
      />
    </>
  );
}
