import { createTheme } from "@mui/material/styles";
import { themes, customize, vars, token } from "./themeCustomization";
import { hexToRgbA } from "./hexToRGBA";

function mergeThemes(props) {
  console.log("mergeThemes called from ", props.calledFrom);
  console.log(
    "currentTheme in ",
    props.calledFrom,
    "is: ",
    " mode: ",
    props.currentTheme.palette.mode,
    " primary main: ",
    props.currentTheme.palette.primary.main,
    ", full theme: ",
    props.currentTheme
  );
  console.log("ThemeProfile: ", props.themeProfile);
  //gets full theme data of the chosen theme (from themeCustomization.js)
  //returns the default theme if the given themeProfile is undefined
  function getThemeData(chosenTheme) {
    let themeData = themes.default.data;
    themes.themes.forEach((theme) => {
      if (theme.name === chosenTheme) {
        themeData = theme.data;
      }
    });
    return themeData;
  }

  //merges custom properties into a given theme
  function customizeTheme(currentTheme) {
    const customizations = {
      palette: {
        primary: {},
        secondary: {},
      },
      components: {},
      shape: {},
    };
    if (props.disableRipple) {
      customizations.components.MuiButtonBase = {
        defaultProps: {
          disableRipple: true,
        },
      };
    }
    if (props.primary) {
      customizations.palette.primary.main = props.primary;
    }
    if (props.secondary) {
      customizations.palette.secondary.main = props.secondary;
    }
    if (props.borderRadius) {
      customizations.shape = { borderRadius: parseInt(props.borderRadius) };
    }

    let mergedTheme = createTheme(currentTheme, customizations);
    return mergedTheme;
  }

  if (props.themeProfile !== undefined) {
    //a specific theme was chosen

    //get the chosen theme
    const basicTheme = createTheme(getThemeData(props.themeProfile));

    //merge any custom properties into it
    const customizedTheme = customizeTheme(basicTheme);
    return customizedTheme;
  } else {
    //no specific theme was chosen

    //merge any custom properties into the current theme
    const customizedTheme = customizeTheme(props.currentTheme);
    return customizedTheme;
  }
}
export { mergeThemes };
