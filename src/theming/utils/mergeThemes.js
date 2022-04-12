import { createTheme } from "@mui/material/styles";
import { themes, customize, vars, token } from "./themeCustomization";
import { deepmerge } from "@mui/utils";
import { hexToRgbA } from "./hexToRGBA";

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
      if (props.mode) {
        let modeTheme = createTheme({
          palette: {
            mode: props.mode,
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
      if (props.primary) {
        currentTheme.palette.primary.main = props.primary;
      }
      if (props.primary_contrastText) {
        currentTheme.palette.primary.contrastText = props.primary_contrastText;
      }

      if (props.secondary) {
        currentTheme.palette.secondary.main = props.secondary;
      }
      if (props.secondary_contrastText) {
        currentTheme.palette.secondary.contrastText =
          props.secondary_contrastText;
      }

      if (props.error) {
        currentTheme.palette.error.main = props.error;
      }
      if (props.error_contrastText) {
        currentTheme.palette.error.contrastText = props.error_contrastText;
      }

      if (props.warning) {
        currentTheme.palette.warning.main = props.warning;
      }
      if (props.warning_contrastText) {
        currentTheme.palette.warning.contrastText = props.warning_contrastText;
      }

      if (props.info) {
        currentTheme.palette.info.main = props.info;
      }
      if (props.info_contrastText) {
        currentTheme.palette.info.contrastText = props.info_contrastText;
      }

      if (props.success) {
        currentTheme.palette.success.main = props.success;
      }
      if (props.success_contrastText) {
        currentTheme.palette.success.contrastText = props.success_contrastText;
      }

      if (props.secondary) {
        currentTheme.palette.secondary.main = props.secondary;
      }
      if (props.secondary_contrastText) {
        currentTheme.palette.secondary.contrastText =
          props.secondary_contrastText;
      }

      //other colors
      if (props.text_primary) {
        currentTheme.palette.text.primary = props.text_primary;
      }
      if (props.text_secondary) {
        currentTheme.palette.text.secondary = props.text_secondary;
      }
      if (props.text_disabled) {
        currentTheme.palette.text.disabled = props.text_disabled;
      }

      if (props.background_paper) {
        currentTheme.palette.background.paper = props.background_paper;
      }
      if (props.background_default) {
        currentTheme.palette.background.default = props.background_default;
      }

      if (props.action_active) {
        currentTheme.palette.action.active = props.action_active;
      }
      if (props.action_hover) {
        currentTheme.palette.action.hover = props.action_hover;
      }
      if (props.action_hoverOpacity || props.action_hoverOpacity === 0) {
        currentTheme.palette.action.hoverOpacity = parseInt(
          props.action_hoverOpacity
        );
      }
      if (props.action_selected) {
        currentTheme.palette.action.selected = props.action_selected;
      }
      if (props.action_selectedOpacity || props.action_selectedOpacity === 0) {
        currentTheme.palette.action.selectedOpacity = parseInt(
          props.action_selectedOpacity
        );
      }
      if (props.action_disabled) {
        currentTheme.palette.action.disabled = props.action_disabled;
      }
      if (props.action_disabledOpacity || props.action_disabledOpacity === 0) {
        currentTheme.palette.action.disabledOpacity = parseInt(
          props.action_disabledOpacity
        );
      }
      if (props.action_focus) {
        currentTheme.palette.action.focus = props.action_focus;
      }
      if (props.action_focusOpacity || props.action_focusOpacity === 0) {
        currentTheme.palette.action.focusOpacity = parseInt(
          props.action_focusOpacity
        );
      }
      if (
        props.action_activatedOpacity ||
        props.action_activatedOpacity === 0
      ) {
        currentTheme.palette.action.activatedOpacity = parseInt(
          props.action_activatedOpacity
        );
      }

      if (props.divider) {
        currentTheme.palette.divider = props.divider;
      }
      if (props.contrastThreshold || props.contrastThreshold === 0) {
        currentTheme.palette.contrastThreshold = parseInt(
          props.contrastThreshold
        );
      }
      if (props.tonalOffset || props.tonalOffset === 0) {
        currentTheme.palette.tonalOffset = parseInt(props.tonalOffset);
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

  if (props.themeProfile !== undefined && props.themeProfile !== "") {
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
