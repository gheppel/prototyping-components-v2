import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import {
  themes,
  customize,
  vars,
  token,
} from "../../theming/utils/themeCustomization";
import { mergeThemes } from "../../theming/utils/mergeThemes";

function ThemeSwitcherGlobal(props) {
  console.log("ThemeSwitcher props: ", props);

  let theme = mergeThemes(props);
  // console.log(basicTheme);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
ThemeSwitcherGlobal.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * The color theme.
   */
  themeProfile: PropTypes.oneOf(["light", "dark", "hacker"]),

  /**
   * Disables the ripple effect.
   */
  disableRipple: PropTypes.bool,

  /**
   * Changes the primary color.
   */
  primary: PropTypes.string,

  /**
   * Changes the secondary color.
   */
  secondary: PropTypes.string,

  /**
   * Changes the global border radius.
   */
  borderRadius: PropTypes.number,
};

export default ThemeSwitcherGlobal;
