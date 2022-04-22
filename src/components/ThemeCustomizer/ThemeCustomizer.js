import React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapper";
import { mergeThemes } from "../../theming/utils/mergeThemes";

// const addFont = (link, index) => {
//   let newFontLink = document.createElement("link");
//   newFontLink.href = link;
//   newFontLink.rel = "stylesheet";
//   newFontLink.id = "muiCCustomFont" + index;
//   document.head.appendChild(newFontLink);
//   //console.log("added: ", newFontLink);
// };

function ThemeCustomizer(props) {
  // const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);

  // if (props.customFonts && props.customFonts !== "") {
  //   props.customFonts.split("|").forEach((font, index) => {
  //     if (document.querySelectorAll("link[href='" + font + "']").length === 0) {
  //       addFont(font, index);
  //     }
  //   });
  // }
  // if (props.deleteCustomFonts === true) {
  //   document
  //     .querySelectorAll("link[id*='muiCCustomFont']")
  //     .forEach((font) => font.remove());
  // }
  // React.useEffect(() => {

  //   setThemeOptions((oldTheme) => {
  //     let options = { ...props };

  //     options.currentTheme = oldTheme.theme;

  //     let newTheme;
  //     //if there is a theme object given, it will be the basis for any customizations
  //     if (props.completeThemeObject && props.completeThemeObject !== "") {
  //       options.currentTheme = createTheme({ ...props.completeThemeObject });
  //     }
  //     newTheme = mergeThemes(options);

  //     return {
  //       theme: newTheme,

  //     };
  //   });

  // }, [props, setThemeOptions, themeOptions.themeCustomizerProps]); //only re-run if any of these change

  return (
    <div>
      <h1>Global Theme Customizer</h1>
      <p>Should change global theme props</p>
      <div style={{ marginTop: "2em" }}>{props.children}</div>
    </div>
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
   * Adds given font links (e.g., Google webfont links) to the html head. Separate multiple links with a pipe ("|")
   * @uxpincontroltype textfield(3)
   */
  customFonts: PropTypes.string,

  /**
   * Deletes all custom font links (e.g., Google webfont links) from the html head.
   */
  deleteCustomFonts: PropTypes.bool,

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

  /**
   * Add a theme object here, if you have one already. Missing properties will be calculated automatically. Works only when the default theme is selected
   */
  themeObject: PropTypes.object,
};

export default ThemeCustomizer;
