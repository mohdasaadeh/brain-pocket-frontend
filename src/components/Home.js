import * as React from "react";

export default function Home() {
  const style = {
    backgroundImage: `url("brain-pocket.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    position: "fixed",
    width: "100%",
    height: "100%",
  };

  return <div style={style}></div>;
}
