import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapper";
import { mergeThemes } from "../../theming/utils/mergeThemes";

function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);
  console.log("ThemeCustomizer props: ", props);
  console.log("themeOptions: ", themeOptions);
  React.useEffect(() => {
    if (themeOptions.themeCustomizerProps !== props) {
      setThemeOptions((oldTheme) => {
        let options = { ...props };

        options.currentTheme = oldTheme.theme;
        console.log("");
        if (Object.keys(themeOptions.themeCustomizerProps).length === 0) {
          console.log("first load");
        } else {
          console.log("global theme change requested");
        }

        let newTheme = mergeThemes(options);

        if (oldTheme.theme === newTheme) {
          console.log("themes are the same - no change");
        } else {
          console.log("for old theme see above in themeOptions");
          console.log("new theme: ", newTheme);
        }
        //console.log("new props: ", options);

        console.log("updated the theme");
        console.log("");
        return { theme: newTheme, themeCustomizerProps: props };
      });
    }
  });

  return (
    <div>
      <h1>Global Theme Customizer</h1>
      <p>Change theme properties in the Properties Panel</p>
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
