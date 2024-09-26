import { Html } from "@react-three/drei";

export default function Instruction() {
  return (
    <>
      <Html
        position={[0, 0, 0]}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "230px",
          fontSize: "20px",
        }}
      >
        <div>Left-Click to Rotate</div>
        <br />
        <div>Right-Click to Move</div>
        <br />
        <div>Scroll to Zoom in / out</div>
      </Html>
      <Html
        position={[0, 10, 0]}
        style={{ backgroundColor: "black", color: "white", width: "230px" }}
      >
        Easter Egg might be hidden..
      </Html>
    </>
  );
}
