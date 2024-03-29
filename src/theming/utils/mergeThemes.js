import { createTheme } from "@mui/material/styles";
import { themes, customize, vars, token } from "./themeCustomization";
import { deepmerge } from "@mui/utils";
import { hexToRgbA } from "./hexToRGBA";
import createPalette from "@mui/material/styles/createPalette";

function mergeThemes(props) {
  //console.log("mergeThemes called from ", props.calledFrom);
  // console.log(
  //   "currentTheme in ",
  //   props.calledFrom,
  //   "is: ",
  //   " mode: ",
  //   props.currentTheme.palette.mode,
  //   " primary main: ",
  //   props.currentTheme.palette.primary.main,
  //   ", full theme: ",
  //   props.currentTheme
  // );
  //console.log("ThemeProfile: ", props.themeProfile);
  //console.log(props);

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
  //expects a full theme object as currentTheme
  function customizeTheme(currentTheme) {
    customizeGeneralProps();
    customizeColor();
    customizeFonts();

    //test
    //currentTheme.spacing = [0, 4, 8, 16, 32, 64];

    //general properties
    function customizeGeneralProps() {
      if (props.disableRipple) {
        currentTheme.components.MuiButtonBase = {
          defaultProps: {
            disableRipple: true,
          },
        };
      }
      if (props.borderRadius) {
        currentTheme.shape = { borderRadius: parseInt(props.borderRadius) };
      }
    }

    //color
    function customizeColor() {
      if (props.palette_mode) {
        let modeTheme = createTheme({
          palette: {
            mode: props.palette_mode,
          },
        });

        currentTheme.palette.text.primary = modeTheme.palette.text.primary;
        currentTheme.palette.text.secondary = modeTheme.palette.text.secondary;
        currentTheme.palette.text.disabled = modeTheme.palette.text.disabled;
        currentTheme.palette.action.active = modeTheme.palette.action.active;
        currentTheme.palette.action.hover = modeTheme.palette.action.hover;
        currentTheme.palette.action.selected =
          modeTheme.palette.action.selected;
        currentTheme.palette.action.disabled =
          modeTheme.palette.action.disabled;
        currentTheme.palette.disabledBackground =
          modeTheme.palette.disabledBackground;
        currentTheme.palette.background.default =
          modeTheme.palette.background.default;
        currentTheme.palette.background.paper =
          modeTheme.palette.background.paper;
        currentTheme.palette.divider = modeTheme.palette.divider;
      }

      //main colors

      //!!! needs to generate supporting colors as well !!!
      //generates supporting colors if just the main color is given
      //main has to be provided always if the color is supposed to be updated
      let tempPalette = {};
      let mainColorProps = [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "text",
        "background",
        "action",
        "common",
      ];
      let numberProps = ["Opacity", "Threshold", "tonalOffset"];

      //expects color props to be like: "props.palette_primary" or "props.palette_primary_light"
      Object.keys(props).forEach((color) => {
        if (props[color] !== "") {
          if (color.includes("palette")) {
            //it's a color

            if (
              mainColorProps.some((mainColorProp) =>
                color.includes(mainColorProp)
              )
            ) {
              //it's a main color

              let propStr = color.split("_");
              tempPalette[propStr[1]] = {};

              if (propStr.length === 2) {
                //is a main shade

                tempPalette[propStr[1]].main = props[color];
              } else {
                //it's light, dark or contrastText or something else

                if (
                  numberProps.some((numberProp) => color.includes(numberProp))
                ) {
                  //it's a number prop

                  tempPalette[propStr[1]][propStr[2]] = parseInt(props[color]);
                } else {
                  //it's a normal prop

                  tempPalette[propStr[1]][propStr[2]] = props[color];
                }
              }
            } else {
              //it's a color without an object
              let propStr = color.split("_");

              if (!color.includes("mode")) {
                //exlude mode

                if (
                  numberProps.some((numberProp) => color.includes(numberProp))
                ) {
                  //it's a number prop

                  tempPalette[propStr[1]] = parseInt(props[color]);
                } else {
                  //it's a normal prop

                  tempPalette[propStr[1]] = props[color];
                }
              }
            }
          }
        }
      });

      let createdPalette = createPalette(tempPalette);

      //updates the current theme with the calculated colors
      Object.keys(tempPalette).forEach((mainColor) => {
        currentTheme.palette[mainColor] = createdPalette[mainColor];
      });
      if (Object.keys(tempPalette).length > 0) {
        console.log("temp:", tempPalette);
        console.log("created: ", createdPalette);
        console.log("resulting theme", currentTheme);
      }
    }

    //fonts
    function customizeFonts() {
      //general Properties
      if (props.htmlFontSize && props.htmlFontSize !== 0) {
        currentTheme.typography.htmlFontSize = parseInt(props.htmlFontSize);
      }
      if (props.fontFamily) {
        currentTheme.typography.fontFamily = props.fontFamily;
      }
      if (props.fontSize && props.fontSize !== 0) {
        currentTheme.typography.fontSize = parseInt(props.fontSize);
      }
      if (props.fontWeightLight && props.fontWeightLight !== 0) {
        currentTheme.typography.fontWeightLight = parseInt(
          props.fontWeightLight
        );
      }
      if (props.fontWeightRegular && props.fontWeightRegular !== 0) {
        currentTheme.typography.fontWeightRegular = parseInt(
          props.fontWeightRegular
        );
      }
      if (props.fontWeightMedium && props.fontWeightMedium !== 0) {
        currentTheme.typography.fontWeightMedium = parseInt(
          props.fontWeightMedium
        );
      }
      if (props.fontWeightBold && props.fontWeightBold !== 0) {
        currentTheme.typography.fontWeightBold = parseInt(props.fontWeightBold);
      }

      //variants
      customizeFontVariants();
      function customizeFontVariants() {
        let propsToCheck = [
          "fontFamily",
          "fontWeight",
          "fontSize",
          "lineHeight",
          "letterSpacing",
          "textTransform",
        ];
        let variants = [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "subtitle1",
          "subtitle2",
          "body1",
          "body2",
          "button",
          "caption",
          "overline",
        ];

        variants.forEach((variant) => {
          propsToCheck.forEach((prop) => {
            let currentProp = variant + "_" + prop;
            if (props[currentProp] && props[currentProp] !== 0) {
              console.log("detected ", currentProp);
              currentTheme.typography[variant][prop] = props[currentProp];
              console.log(
                "set theme for ",
                currentProp,
                " to ",
                currentTheme.typography[variant][prop]
              );
            }
          });
        });
      }
    }
    // console.log(currentTheme);
    return currentTheme;
  }
  if (props.resetTheme && props.resetTheme !== "") {
    //theme reset
    const defaultTheme = createTheme(getThemeData());
    console.log("theme reset");
    return defaultTheme;
  } else if (props.themeProfile !== undefined && props.themeProfile !== "") {
    //a specific theme was chosen

    //get the chosen theme
    const chosenTheme = createTheme(getThemeData(props.themeProfile));

    //merge any custom properties into it
    const customizedTheme = customizeTheme(chosenTheme);
    return customizedTheme;
  } else {
    //no specific theme was chosen

    //merge any custom properties into the current theme
    const customizedTheme = customizeTheme(props.currentTheme);
    return customizedTheme;
  }
}
export { mergeThemes };
