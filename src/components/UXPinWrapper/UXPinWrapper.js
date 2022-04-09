// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./default-theme";
import { mergeThemes } from "../../theming/utils/mergeThemes";

// export default function UXPinWrapper({ children }) {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// }

export const ThemeContext = React.createContext({
  theme: {},
  updateTheme: {},
});

export default class UXPinWrapper extends Component {
  constructor(props) {
    super(props);

    let completeDefaultTheme = createTheme(defaultTheme);
    let options = {
      currentTheme: completeDefaultTheme,
      themeProfile: "hacker",
    };
    this.updateTheme = (options) => {
      //function to update theme

      this.setState(function (state) {
        let newOptions = { currentTheme: state.theme, ...options };

        //do something
        let newTheme = mergeThemes(newOptions);

        //return the new theme
        return { theme: newTheme };
      });
    };
    this.state = { theme: mergeThemes(options), updateTheme: this.updateTheme };
  }

  render() {
    console.log("state: ", this.state);
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={this.state.theme}>
          {this.props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}
