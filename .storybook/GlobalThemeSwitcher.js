import { createTheme } from "@mui/material/styles";
import {
  themes,
  customize,
  vars,
  token,
} from "../src/theming/utils/themeCustomization";
import { hexToRgbA } from "../src/theming/utils/hexToRGBA";

//doesnt merge anything at the moment, returns just the plain theme
function mergeThemes(chosenTheme) {
  //gets full theme data of the chosen theme (from themeCustomization.js)
  function getThemeData(chosenTheme) {
    let themeData = themes.default.data;
    themes.themes.forEach((theme) => {
      if (theme.name === chosenTheme) {
        themeData = theme.data;
      }
    });
    return themeData;
  }

  let basicTheme = createTheme(getThemeData(chosenTheme));
  // //merges theme properties received through component props into the theme
  // if (customize) {
  //   let mergedTheme = createTheme({
  //     ...basicTheme,
  //     palette: {
  //       primary: {
  //         main: props.primary ? props.primary : basicTheme.palette.primary.main,
  //       },
  //     },
  //   });
  //   //custom color scheme
  //   if (props.colorscheme && props.colorscheme !== "default") {
  //     console.log(props.colorscheme);
  //     let color = props.colorscheme;
  //     if (props.colorscheme && props.colorscheme !== "") {
  //       Object.defineProperty(mergedTheme.components, "MuiButton", {
  //         value: {
  //           variants: [
  //             {
  //               props: {
  //                 variant: "contained",
  //               },
  //               style: {
  //                 backgroundColor: vars.color.general[color].main,
  //                 color: vars.color.general[color].contrastText,
  //                 ":hover": {
  //                   backgroundColor: vars.color.general[color].dark,
  //                 },
  //               },
  //             },
  //             {
  //               props: {
  //                 variant: "text",
  //               },
  //               style: {
  //                 color: vars.color.general[color].main,
  //                 ":hover": {
  //                   backgroundColor: hexToRgbA(
  //                     vars.color.general[color].main,
  //                     "0.04"
  //                   ),
  //                 },
  //               },
  //             },
  //             {
  //               props: {
  //                 variant: "outlined",
  //               },
  //               style: {
  //                 borderColor: vars.color.general[color].main,
  //                 color: vars.color.general[color].main,
  //                 ":hover": {
  //                   color: vars.color.general[color].dark,
  //                 },
  //               },
  //             },
  //           ],
  //         },
  //       });
  //       //console.log(mergedTheme.components);
  //     }
  //   }
  //   //console.log("mergedTheme: ", mergedTheme);
  //   // console.log("theme: ", basicTheme.palette.primary.main);
  //   // console.log("props.primary: ", props.primary);
  //   // console.log("custom theme: ", mergedTheme.palette.primary.main);
  //   //console.log(mergedTheme);
  //   return mergedTheme;
  // }
  //console.log("using default theme, no customization");
  //console.log(basicTheme);
  //console.log(darkTheme);
  return basicTheme;
}
export { mergeThemes };
