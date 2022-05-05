import React from "react";
import { createTheme } from "@mui/material/styles";
import defaultTheme from "./default-theme";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";

export const ThemeContext = React.createContext({});
const completeDefaultTheme = createTheme(defaultTheme);

if (
  document.querySelectorAll("script[src*='kit.fontawesome.com/b96eb34bc4.js']")
    .length === 0
) {
  let fontawesomeScript = document.createElement("script");
  fontawesomeScript.src = "https://kit.fontawesome.com/b96eb34bc4.js";
  fontawesomeScript.crossOrigin = "anonymous";
  document.head.appendChild(fontawesomeScript);
  //<script src="https://kit.fontawesome.com/b96eb34bc4.js" crossorigin="anonymous"></script>
}

let listeners = [];

const addListener = (listener) => {
  listeners.push(listener);
};

const removeListener = (listener) => {
  listeners = listeners.filter((lis) => lis !== listener);
};

//global theme object for all wrapper instances
let themeOptions = {
  theme: completeDefaultTheme,
};

//allows to update the global theme object and updates all wrapper instances with the new theme
//expects a function as a parameter, which itself expects the old theme as a parameter
const setThemeOptions = (callback) => {
  //the callback function is called and given the old theme as a parameter
  //the result of the callback function is saved in themeOptions (the new theme)
  themeOptions = callback(themeOptions);
  console.log("theme was updated");
  //each listener is a function which sets the theme in the state of its UXPinWrapper component to a given theme
  //each function (listener) is executed with the given theme as a parameter, so all UXPinWrapper instances are updated with the same theme
  listeners.forEach((listener) => {
    listener(themeOptions);
  });
};

export default function UXPinWrapper(props) {
  const [theme, setTheme] = React.useState(themeOptions);

  React.useEffect(() => {
    //updates the component state to a given theme
    const onThemeChange = (newTheme) => {
      setTheme(newTheme);
    };
    console.log(theme);
    //the component adds a function to the listener array, which allows to update its state with a given theme
    addListener(onThemeChange);
    //the listener is removed when the component unmounts (is deleted from the canvas)
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
