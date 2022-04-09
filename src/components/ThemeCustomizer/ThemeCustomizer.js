import React from "react";
import PropTypes from "prop-types";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { themeProfiles } from "../../theming/utils/themeCustomization";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapper";

function ThemeCustomizer(props) {
  console.log("ThemeSwitcherGlobal props: ", props);

  const currentTheme = useTheme();
  return (
    <ThemeContext.Consumer>
      {(theme, updateTheme) => {
        console.log(theme);
        console.log(updateTheme);
        updateTheme(props);
      }}
    </ThemeContext.Consumer>
  );
}

ThemeCustomizer.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * The color theme. Overrides any theme properties in parents if specified
   * @uxpinpropname theme
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
  borderRadius: PropTypes.string,
};

export default ThemeCustomizer;
