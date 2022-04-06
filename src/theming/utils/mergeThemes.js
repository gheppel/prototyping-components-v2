import { createTheme } from "@mui/material/styles";
import { themes, customize, vars, token } from "./themeCustomization";
import { hexToRgbA } from "./hexToRGBA";

function mergeThemes(props) {
  console.log(props);
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
  console.log("ThemeProfile: ", props.themeProfile);
  let basicTheme = createTheme(getThemeData(props.themeProfile));
  // console.log("basic Theme: ", basicTheme);

  //merges theme properties received through component props into the theme
  if (customize) {
    // console.log(basicTheme.palette.primary.main);
    // console.log(basicTheme.palette.mode);

    //props that don't need the createTheme helper functions

    //ripple
    // if (props.disableRipple) {
    //   basicTheme.components = {
    //     MuiButtonBase: {
    //       defaultProps: {
    //         disableRipple: true,
    //       },
    //     },
    //   };

    //   console.log("disabled ripple");
    // }

    //props that need the createTheme helper functions
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
    // console.log(basicTheme);
    let mergedTheme = createTheme(basicTheme, customizations);

    //console.log("mergedTheme: ", mergedTheme);
    // console.log("theme: ", basicTheme.palette.primary.main);
    // console.log("props.primary: ", props.primary);
    // console.log("custom theme: ", mergedTheme.palette.primary.main);
    //   console.log(mergedTheme);
    //   return mergedTheme;
    // }
    console.log("using default theme, no customization");
    //console.log(basicTheme);
    console.log("merged theme: ", mergedTheme);
    return mergedTheme;
  }
}
export { mergeThemes };
