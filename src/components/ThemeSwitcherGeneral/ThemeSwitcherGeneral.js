import React from "react";
import PropTypes from "prop-types";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
function ThemeSwitcherGeneral(props) {
  //console.log("ThemeSwitcher props: ", props);
  // console.log(basicTheme);
  const currentTheme = useTheme();
  return (
    <ThemeProviderHelper
      {...props}
      currentTheme={currentTheme}
      calledFrom="ThemeSwitcherGlobal"
    >
      {!props.children ? (
        <span>
          <center>
            <Typography variant="h6">ThemeSwitcher General</Typography>
            <p>Drag components into this wrapper</p>
          </center>
        </span>
      ) : (
        props.children
      )}
    </ThemeProviderHelper>
  );
}

ThemeSwitcherGeneral.propTypes = {
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
  palette_primary: PropTypes.string,

  /**
   * Changes the secondary color.
   */
  palette_secondary: PropTypes.string,

  /**
   * Changes the global border radius.
   */
  borderRadius: PropTypes.string,

  /**
   * Resets the theme to the default theme from /src/components/UXPinWrapper/default-theme.js
   */
  resetTheme: PropTypes.bool,
};

export default ThemeSwitcherGeneral;
