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
  // console.log(props);
  // //console.log(typeof props.children);
  // //console.log(props.children.length);
  // let newChildren = props.children;
  // if (newChildren.length) {
  //   newChildren.forEach((children) => {
  //     children.randomProp = "test";
  //   });
  // } else {
  //   //is only one children
  //   newChildren.randomProp = "test";
  // }
  // console.log(newChildren);
  //console.log(Object.entries(props.children));

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default ThemeProviderHelper;
