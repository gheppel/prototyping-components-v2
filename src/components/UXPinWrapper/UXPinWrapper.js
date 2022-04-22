// eslint-disable-next-line no-unused-vars
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./default-theme";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";

export const ThemeContext = React.createContext({});
const completeDefaultTheme = createTheme(defaultTheme);

let listeners = [];

const addListener = (listener) => {
  listeners.push(listener);
};

const removeListener = (listener) => {
  listeners = listeners.filter((lis) => lis !== listener);
};

let themeOptions = {
  theme: completeDefaultTheme,
};

const setThemeOptions = (callback) => {
  themeOptions = callback(themeOptions);
  listeners.forEach((listener) => {
    listener(themeOptions);
  });
};

export default function UXPinWrapper(props) {
  const [theme, setTheme] = React.useState(themeOptions);

  React.useEffect(() => {
    const onThemeChange = (newTheme) => {
      setTheme(newTheme);
    };
    console.log(theme);
    addListener(onThemeChange);
    return () => removeListener(onThemeChange);
  });

  return (
    <ThemeContext.Provider value={[theme, setThemeOptions]}>
      <ThemeProviderHelper currentTheme={themeOptions.theme}>
        {props.children}
      </ThemeProviderHelper>
    </ThemeContext.Provider>
  );
}
