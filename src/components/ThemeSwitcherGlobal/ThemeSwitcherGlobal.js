import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  themes,
  customize,
  vars,
  token,
} from "../../theming/utils/themeCustomization";
import Button from "../Button/Button";

function ThemeSwitcherGeneral(props) {
  // console.log("props: ", props);

  function getThemeData(chosenTheme) {
    let themeData = themes.default.data;
    themes.themes.forEach((theme) => {
      if (theme.name === chosenTheme) {
        themeData = theme.data;
      }
    });
    return themeData;
  }

  let basicTheme = createTheme(getThemeData(props.theme));
  console.log(props.theme);
  // console.log(basicTheme);

  return <ThemeProvider theme={basicTheme}>{props.children}</ThemeProvider>;
}
ThemeSwitcherGeneral.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * The color theme.
   */
  theme: PropTypes.oneOf(["light", "dark", "hacker"]),
};

export default ThemeSwitcherGeneral;
