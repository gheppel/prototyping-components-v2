import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { mergeThemes } from "./mergeThemes";
// import { ThemeContext } from "../../components/UXPinWrapper/UXPinWrapper";

function ThemeProviderHelper(props) {
  // const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);
  // if (props.calledFromWrapper) {
  //   return (
  //     <ThemeProvider theme={themeOptions.theme}>{props.children}</ThemeProvider>
  //   );
  // } else {
  let theme = mergeThemes(props);
  //console.log("Theme in ThemeProviderHelper: ", theme);
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
  // }
}

export default ThemeProviderHelper;
