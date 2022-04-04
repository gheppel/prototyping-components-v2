import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { mergeThemes } from "./mergeThemes";

function ThemeProviderLocal(props) {
  let theme = undefined;
  if (props.themeProfile !== undefined) {
    console.log("local theme detected");
    theme = mergeThemes(props);

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
  }
  return props.children;
}

export default ThemeProviderLocal;
