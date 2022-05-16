// import logo from "./logo.svg";
import React from "react";
import "./App.css";

import UXPinWrapper from "./components/UXPinWrapper/UXPinWrapper";
import { Box } from "@mui/system";
import ThemeGenerator from "./components/ThemeGenerator/ThemeGenerator";

function App() {
  return (
    <div className="App">
      <UXPinWrapper>
        <Box sx={{ height: "100vh", width: "100vw" }}>
          <ThemeGenerator />
        </Box>
      </UXPinWrapper>
    </div>
  );
}

export default App;
