import React from "react";
import PropTypes from "prop-types";
import ButtonM from "@mui/material/Button";
import Icon from "../Icon/Icon";
import { iconVariants } from "../Icon/icon-variants";
import hacker from "../../theming/themes/hacker";
import ThemeProviderLocal from "../../theming/utils/ThemeProviderLocal";
// import { useTheme } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { mergeThemes } from "../../theming/utils/mergeThemes";
// import { styled } from "@mui/styles";

/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 */
function Button(props) {
  const { uxpinRef, ...other } = props;
  // let theme = undefined;
  // const ThemeProviderButton = (props) => {
  //   if (props.themeProfile !== undefined) {
  //     console.log("local theme detected");
  //     theme = mergeThemes(props);

  //     return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
  //   }
  //   return props.children;
  // };

  return (
    <ThemeProviderLocal {...props}>
      <ButtonM
        {...other}
        ref={uxpinRef}
        startIcon={props.startIcon && <Icon>{props.startIcon}</Icon>}
        endIcon={props.endIcon && <Icon>{props.endIcon}</Icon>}
        //sx={{ backgroundColor: theme.palette.primary.main }}
      >
        {props.children}
      </ButtonM>
    </ThemeProviderLocal>
  );
}

Button.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * The color theme specific to this component.
   */
  theme: PropTypes.oneOf(["light", "dark", "hacker"]),

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button will have no elevation.
   */
  disableElevation: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),

  /**
   * The HREF of the button.
   */
  href: PropTypes.string,

  /**
   * If set, icon will display to the left.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  startIcon: PropTypes.oneOf(iconVariants),

  /**
   * If set, icon will display to the right.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  endIcon: PropTypes.oneOf(iconVariants),

  /**
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Button;
