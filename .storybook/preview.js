import React from "react";
import { themes } from "../src/theming/utils/themeCustomization";
import { ThemeProvider } from "@mui/material/styles";
import { mergeThemes } from "./GlobalThemeSwitcher";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

//configure theme chooser in toolbar
// const themeNames = () => {
//   const names = [];
//   themes.themes.forEach((theme) => {
//     names.push(theme.name);
//   });
//   return names;
// };
// export const globalTypes = {
//   muiTheme: {
//     name: "MUI Theme",
//     description: "Globales Theme für alle Komponenten",
//     defaultValue: themes.default.name,
//     toolbar: {
//       icon: "circlehollow",
//       items: themeNames(),
//       showName: true,
//     },
//   },
// };

//obtain the chosen theme
const withThemeProvider = (Story, context) => {
  //let theme = mergeThemes(context.globals.muiTheme);

  //console.log(context.globals.muiTheme);

  return (
    <div style={{ margin: "2em" }}>
      <Story {...context} />
    </div>
  );
};

//provide stories with the theme and other decorators
export const decorators = [withThemeProvider];
