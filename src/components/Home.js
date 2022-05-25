import * as React from "react";
import Paper from "@mui/material/Paper";

export default function Home() {
  const style = {
    backgroundImage: `url("brain-pocket.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    position: "fixed",
    width: "100%",
    height: "100%",
  };

  return <Paper square sx={{ height: "90%" }} style={style}></Paper>;
}
