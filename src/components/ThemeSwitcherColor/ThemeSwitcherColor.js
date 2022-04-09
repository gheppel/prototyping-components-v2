import React from "react";
import PropTypes from "prop-types";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { useTheme } from "@mui/material/styles";
import { themeProfiles } from "../../theming/utils/themeCustomization";

function ThemeSwitcherColor(props) {
  const currentTheme = useTheme();

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
  themeProfile: PropTypes.oneOf(themeProfiles),

  /**
   * Changes the primary color. Shades are computed automatically if not specified
   */
  mode: PropTypes.oneOf(["light", "dark"]),

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

  /**
   * Changes the contrasting color for text for the secondary color.
   * @uxpinpropname secondary contrastText
   */
  secondary_contrastText: PropTypes.string,

  /**
   * Changes the error color. Shades are computed automatically if not specified
   */
  error: PropTypes.string,

  /**
   * Changes the contrasting color for text for the error color.
   * @uxpinpropname error contrastText
   */
  error_contrastText: PropTypes.string,

  /**
   * Changes the warning color. Shades are computed automatically if not specified
   */
  warning: PropTypes.string,

  /**
   * Changes the contrasting color for text for the warning color.
   * @uxpinpropname warning contrastText
   */
  warning_contrastText: PropTypes.string,

  /**
   * Changes the info color. Shades are computed automatically if not specified
   */
  info: PropTypes.string,

  /**
   * Changes the contrasting color for text for the info color.
   * @uxpinpropname info contrastText
   */
  info_contrastText: PropTypes.string,

  /**
   * Changes the success color. Shades are computed automatically if not specified
   */
  success: PropTypes.string,

  /**
   * Changes the contrasting color for text for the success color.
   * @uxpinpropname success contrastText
   */
  success_contrastText: PropTypes.string,

  /**
   * Changes the text_primary color.
   */
  text_primary: PropTypes.string,

  /**
   * Changes the text_secondary color.
   */
  text_secondary: PropTypes.string,

  /**
   * Changes the text_disabled color.
   */
  text_disabled: PropTypes.string,

  /**
   * Changes the background_paper color.
   */
  background_paper: PropTypes.string,

  /**
   * Changes the background_default color.
   */
  background_default: PropTypes.string,

  /**
   * Changes the action_active color. Should be in RGBA format.
   */
  action_active: PropTypes.string,

  /**
   * Changes the action_hover color. Should be in RGBA format.
   */
  action_hover: PropTypes.string,

  /**
   * Changes the action_hoverOpacity value. Must be a number between 0 and 1
   */
  action_hoverOpacity: PropTypes.number,

  /**
   * Changes the action_selected color. Should be in RGBA format.
   */
  action_selected: PropTypes.string,

  /**
   * Changes the action_selectedOpacity value. Must be a number between 0 and 1
   */
  action_selectedOpacity: PropTypes.number,

  /**
   * Changes the action_disabled color. Should be in RGBA format.
   */
  action_disabled: PropTypes.string,

  /**
   * Changes the action_disabledOpacity value. Must be a number between 0 and 1
   */
  action_disabledOpacity: PropTypes.number,

  /**
   * Changes the action_focus color. Should be in RGBA format.
   */
  action_focus: PropTypes.string,

  /**
   * Changes the action_focusOpacity value. Must be a number between 0 and 1
   */
  action_focusOpacity: PropTypes.number,

  /**
   * Changes the action_activatedOpacity value. Must be a number between 0 and 1
   */
  action_activatedOpacity: PropTypes.number,

  /**
   * Changes the divider color. Should be in RGBA format.
   */
  divider: PropTypes.string,

  /**
   * Changes the contrastThreshold value.
   */
  contrastThreshold: PropTypes.number,

  /**
   * Changes the tonalOffset value.
   */
  tonalOffset: PropTypes.number,
};
export default ThemeSwitcherColor;
