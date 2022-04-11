import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapper";
import { mergeThemes } from "../../theming/utils/mergeThemes";

function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);
  console.log("ThemeCustomizer props: ", props);
  console.log(themeOptions);
  React.useEffect(() => {
    if (themeOptions.themeCustomizerProps !== props) {
      setThemeOptions((oldTheme) => {
        let options = { ...props };
        // console.log("old theme:", oldTheme.theme);
        options.currentTheme = oldTheme.theme;
        // console.log("new props: ", options);
        // console.log("updated the theme");
        return { theme: mergeThemes(options), themeCustomizerProps: props };
      });
    }
  });

  return <div>{/* <Button>Change props in the props panel!</Button> */}</div>;
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
