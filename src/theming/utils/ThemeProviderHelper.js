import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { mergeThemes } from "./mergeThemes";

function ThemeProviderHelper(props) {
  let theme = mergeThemes(props);
  // if (props.themeProfile !== undefined) {
  //   console.log("local theme detected");
  //   theme = mergeThemes(props);

  //   return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
  // }
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default ThemeProviderHelper;
