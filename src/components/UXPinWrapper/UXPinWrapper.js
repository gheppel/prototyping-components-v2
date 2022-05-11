// eslint-disable-next-line no-unused-vars
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./default-theme";

if (
  document.querySelectorAll("script[src*='kit.fontawesome.com/b96eb34bc4.js']")
    .length === 0
) {
  let fontawesomeScript = document.createElement("script");
  fontawesomeScript.src = "https://kit.fontawesome.com/b96eb34bc4.js";
  fontawesomeScript.crossOrigin = "anonymous";
  document.head.appendChild(fontawesomeScript);
  //<script src="https://kit.fontawesome.com/b96eb34bc4.js" crossorigin="anonymous"></script>
}

const theme = createTheme(defaultTheme);

export default function UXPinWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
