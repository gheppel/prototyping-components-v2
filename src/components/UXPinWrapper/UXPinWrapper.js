// eslint-disable-next-line no-unused-vars
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./default-theme";
// import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { mergeThemes } from "../../theming/utils/mergeThemes";

// export default function UXPinWrapper({ children }) {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// }

export const ThemeContext = React.createContext({});

export default function UXPinWrapper(props) {
  const completeDefaultTheme = createTheme(defaultTheme);
  const [themeOptions, setThemeOptions] = React.useState({
    theme: completeDefaultTheme,
    themeCustomizerProps: {},
  });
  console.log("theme im Wrapper: ", themeOptions.theme);
  // console.log(theme);
  // console.log(completeDefaultTheme);

  return (
    <ThemeContext.Provider value={[themeOptions, setThemeOptions]}>
      {/* <ThemeProviderHelper calledFromWrapper={true}>
        {props.children}
      </ThemeProviderHelper> */}
      <ThemeProvider theme={themeOptions.theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
