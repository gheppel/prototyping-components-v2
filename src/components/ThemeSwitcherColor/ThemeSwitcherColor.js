import React from "react";
import PropTypes from "prop-types";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { mergeThemes } from "../../theming/utils/mergeThemes";
import { themeProfiles } from "../../theming/utils/themeCustomization";
import { Typography } from "@mui/material";

function ThemeSwitcherColor(props) {
  const currentTheme = { ...useTheme() };
  const theme = mergeThemes({ currentTheme: currentTheme, ...props });
  return (
    <ThemeProvider theme={theme}>
      {!props.children ? (
        <span>
          <center>
            <Typography variant="h6">ThemeSwitcher Color</Typography>
            <p>Drag components into this wrapper</p>
          </center>
        </span>
      ) : (
        props.children
      )}
    </ThemeProvider>
  );
}
ThemeSwitcherColor.propTypes = {
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
   * Changes the primary color. Shades are computed automatically if not specified
   */
  palette_mode: PropTypes.oneOf(["light", "dark"]),

  /**
   * Changes the primary color. Shades are computed automatically if not specified
   */
  palette_primary: PropTypes.string,

  /**
   * Changes the contrasting color for text for the primary color.
   * @uxpinpropname primary contrastText
   */
  palette_primary_contrastText: PropTypes.string,

  /**
   * Changes the secondary color. Shades are computed automatically if not specified
   */
  palette_secondary: PropTypes.string,

  /**
   * Changes the contrasting color for text for the secondary color.
   * @uxpinpropname secondary contrastText
   */
  palette_secondary_contrastText: PropTypes.string,

  /**
   * Changes the error color. Shades are computed automatically if not specified
   */
  palette_error: PropTypes.string,

  /**
   * Changes the contrasting color for text for the error color.
   * @uxpinpropname error contrastText
   */
  palette_error_contrastText: PropTypes.string,

  /**
   * Changes the warning color. Shades are computed automatically if not specified
   */
  palette_warning: PropTypes.string,

  /**
   * Changes the contrasting color for text for the warning color.
   * @uxpinpropname warning contrastText
   */
  palette_warning_contrastText: PropTypes.string,

  /**
   * Changes the info color. Shades are computed automatically if not specified
   */
  palette_info: PropTypes.string,

  /**
   * Changes the contrasting color for text for the info color.
   * @uxpinpropname info contrastText
   */
  palette_info_contrastText: PropTypes.string,

  /**
   * Changes the success color. Shades are computed automatically if not specified
   */
  palette_success: PropTypes.string,

  /**
   * Changes the contrasting color for text for the success color.
   * @uxpinpropname success contrastText
   */
  palette_success_contrastText: PropTypes.string,

  /**
   * Changes the text_primary color.
   */
  palette_text_primary: PropTypes.string,

  /**
   * Changes the text_secondary color.
   */
  palette_text_secondary: PropTypes.string,

  /**
   * Changes the text_disabled color.
   */
  palette_text_disabled: PropTypes.string,

  /**
   * Changes the background_paper color.
   */
  palette_background_paper: PropTypes.string,

  /**
   * Changes the background_default color.
   */
  palette_background_default: PropTypes.string,

  /**
   * Changes the action_active color. Should be in RGBA format.
   */
  palette_action_active: PropTypes.string,

  /**
   * Changes the action_hover color. Should be in RGBA format.
   */
  palette_action_hover: PropTypes.string,

  /**
   * Changes the action_hoverOpacity value. Must be a number between 0 and 1
   */
  palette_action_hoverOpacity: PropTypes.number,

  /**
   * Changes the action_selected color. Should be in RGBA format.
   */
  palette_action_selected: PropTypes.string,

  /**
   * Changes the action_selectedOpacity value. Must be a number between 0 and 1
   */
  palette_action_selectedOpacity: PropTypes.number,

  /**
   * Changes the action_disabled color. Should be in RGBA format.
   */
  palette_action_disabled: PropTypes.string,

  /**
   * Changes the action_disabledOpacity value. Must be a number between 0 and 1
   */
  palette_action_disabledOpacity: PropTypes.number,

  /**
   * Changes the action_focus color. Should be in RGBA format.
   */
  palette_action_focus: PropTypes.string,

  /**
   * Changes the action_focusOpacity value. Must be a number between 0 and 1
   */
  palette_action_focusOpacity: PropTypes.number,

  /**
   * Changes the action_activatedOpacity value. Must be a number between 0 and 1
   */
  palette_action_activatedOpacity: PropTypes.number,

  /**
   * Changes the divider color. Should be in RGBA format.
   */
  palette_divider: PropTypes.string,

  /**
   * Changes the contrastThreshold value.
   */
  palette_contrastThreshold: PropTypes.number,

  /**
   * Changes the tonalOffset value.
   */
  palette_tonalOffset: PropTypes.number,
};
export default ThemeSwitcherColor;
