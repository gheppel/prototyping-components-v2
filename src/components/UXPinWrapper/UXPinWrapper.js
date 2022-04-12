// eslint-disable-next-line no-unused-vars
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./default-theme";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";

export const ThemeContext = React.createContext({});

export default function UXPinWrapper(props) {
  const completeDefaultTheme = createTheme(defaultTheme);
  const [themeOptions, setThemeOptions] = React.useState({
    theme: completeDefaultTheme,
    themeCustomizerProps: {},
  });
  console.log("theme im Wrapper: ", themeOptions.theme);
  console.log("wrapper props: ", props);
  // console.log(theme);
  // console.log(completeDefaultTheme);

  return (
    <ThemeContext.Provider value={[themeOptions, setThemeOptions]}>
      <ThemeProviderHelper currentTheme={themeOptions.theme}>
        {props.children}
      </ThemeProviderHelper>
    </ThemeContext.Provider>
  );
}
