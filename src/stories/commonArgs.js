import { vars } from "../theming/utils/themeCustomization";

export const commonArgs = {
  sx: {
    control: { type: "object" },
    name: "Eigenes CSS",
    description:
      "Alle möglichen CSS-Regeln können angegeben werden (als JS-Objekt, also zb {fontSize: '24px'})",
  },
  theme: {
    options: ["light", "dark", "hacker"],
    control: { type: "select" },
    description: "Das globale Theme",
    defaultValue: "light",
    table: {
      defaultValue: { summary: "light" },
    },
  },
  primary: {
    name: "Globale Primärfarbe",
    control: { type: "color" },
    description: "Globales Theming für die Primärfarbe",
    defaultValue: "",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  colorscheme: {
    name: "Farb-Schema",
    options: ["default", ...Object.keys(vars.color.general)],
    control: { type: "select" },
    defaultValue: "default",
    description:
      "Die globale Farbvariable, die für den Hintergrund genutzt werden soll",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    defaultValue: "false",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};
