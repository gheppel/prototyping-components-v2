import hacker from "../../theming/themes/hacker";
import dark from "../../theming/themes/dark";
import light from "../../theming/themes/light";
import defaultTheme from "../../components/UXPinWrapper/default-theme";

//lists all available themes and default
export const themes = {
  themes: [
    { name: "dark", data: dark },
    { name: "light", data: light },
    { name: "hacker", data: hacker },
  ],
  default: { name: "default", data: defaultTheme },
};
export const themeProfiles = getThemeNames();
//set to true if you want to use custom variables and design tokens
//if set to false, only the MUI theme will be availabe
export const customize = true;

//global styling variables
export const vars = {
  color: {
    general: {
      primary: {
        main: "#1976d2",
        light: "rgb(71, 145, 219)",
        dark: "rgb(17, 82, 147)",
        contrastText: "#fff",
      },
      secondary: {
        main: "#9c27b0",
        light: "#ba68c8",
        dark: "#7b1fa2",
        contrastText: "#fff",
      },
      accent3: {
        main: "#009b3c",
        light: "#52cd69",
        dark: "#006b0d",
        contrastText: "#fff",
      },
      accent4: {
        main: "#ffc800",
        light: "#fffb50",
        dark: "#c79800",
        contrastText: "#000",
      },
    },
    util: {},
    other: {},
  },
  typography: {
    heading: {},
  },
  spacing: {},
};

//design token (more detailed customization)
export const token = {
  color: {
    component_button_backgroundColor: vars.color.general.accent3.main,
    component_button_color: vars.color.general.accent3.contrastText,
  },
  typography: {},
  spacing: {},
};

//variants of components
export const componentVariants = {
  Button: [
    {
      name: "accent3Button",
      style: {
        color: vars.color.general.accent3.contrastText,
        textTransform: "none",
        backgroundColor: vars.color.general.accent3.main,
      },
    },
  ],
};

//convert deep vars objects to plain arrays
//to do
function getThemeNames() {
  let themeProfiles = [];
  themes.themes.forEach((theme) => {
    themeProfiles.push(theme.name);
  });
  return themeProfiles;
}
