import React from "react";
import PropTypes from "prop-types";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { useTheme } from "@mui/material/styles";
import { themeProfiles } from "../../theming/utils/themeCustomization";

function ThemeSwitcherColor(props) {
  //console.log("ColorSwitcher children: ", props.children);
  const currentTheme = useTheme();
  console.log(currentTheme);
  return (
    <ThemeProviderHelper
      {...props}
      currentTheme={currentTheme}
      calledFrom="ThemeSwitcherColor"
    >
      {props.children}
    </ThemeProviderHelper>
  );
}
ThemeSwitcherColor.propTypes = {
  /**
   * The color theme. Overrides any theme properties in parents if specified
   * @uxpinpropname theme
   */
  themeProfile: PropTypes.oneOf(["light", "dark", "hacker"]),

  /**
   * Changes the primary color. Shades are computed automatically if not specified
   */
  primary: PropTypes.string,

  /**
   * Changes the contrasting color for text for the primary color.
   * @uxpinpropname primary contrastText
   */
  primary_contrastText: PropTypes.string,
  /**
   * Changes the secondary color. Shades are computed automatically if not specified
   */
  secondary: PropTypes.string,
};
export default ThemeSwitcherColor;
