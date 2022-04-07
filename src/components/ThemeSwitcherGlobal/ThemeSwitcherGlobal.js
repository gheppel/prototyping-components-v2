import React from "react";
import PropTypes from "prop-types";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { themeProfiles } from "../../theming/utils/themeCustomization";
import { useTheme } from "@mui/material/styles";
function ThemeSwitcherGlobal(props) {
  //console.log("ThemeSwitcher props: ", props);
  // console.log(basicTheme);
  const currentTheme = useTheme();
  return (
    <ThemeProviderHelper
      {...props}
      currentTheme={currentTheme}
      calledFrom="ThemeSwitcherGlobal"
    >
      {props.children}
    </ThemeProviderHelper>
  );
}

ThemeSwitcherGlobal.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * The color theme. Overrides any theme properties in parents if specified
   * @uxpinpropname theme
   */
  themeProfile: PropTypes.oneOf(themeProfiles),

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
  borderRadius: PropTypes.string,
};

export default ThemeSwitcherGlobal;
