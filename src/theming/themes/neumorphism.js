const neumorphism = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: "px",
  },
  direction: "ltr",
  components: {
    MuiButton: {
      variant: [
        {
          props: { variant: "contained" },
          style: {
            "background-image":
              "linear-gradient(45deg, #fc32a2 0%, #e01786 49%, #cf0674 100% )",
            "box-shadow":
              "2px 2px 2px rgba(0,0,0,0.2), -2px -2px 2px rgba(255,255,255,0.8)",
            border: "2px solid #f51d94",
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: "24px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
      defaultProps: {
        disableRipple: "true",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "2px 2px 2px rgba(0,0,0,0.2), -2px -2px 2px rgba(255,255,255,0.8)",
          border: "2px solid #e6e9f2",
          "background-image":
            "linear-gradient(45deg, #f8f9ff 0%, #edf0f7 100% )",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "2px 2px 2px rgba(0,0,0,0.2), -2px -2px 2px rgba(255,255,255,0.8)",
          border: "2px solid #e6e9f2",
          "background-image":
            "linear-gradient(45deg, #f8f9ff 0%, #edf0f7 100% )",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "box-shadow":
            " inset 1px 1px 2px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(255,255,255,1)",
          "border-radius": " 12px",
          border: "2px solid #e6e9f2",
        },
      },
    },
  },
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#e01786",
      light: "#fc32a2",
      dark: "#cf0674",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0994eb",
      light: "rgb(58, 169, 239)",
      dark: "rgb(6, 103, 164)",
      contrastText: "#fff",
    },
    error: {
      main: "#c41046",
      light: "rgb(207, 63, 107)",
      dark: "rgb(137, 11, 49)",
      contrastText: "#fff",
    },
    warning: {
      main: "#e8ba15",
      light: "rgb(236, 199, 67)",
      dark: "rgb(162, 130, 14)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#1db579",
      light: "rgb(74, 195, 147)",
      dark: "rgb(20, 126, 84)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fff",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shape: {
    borderRadius: 8,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48,
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  typography: {
    htmlFontSize: 16,
    fontFamily: "montserrat",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "montserrat",
      fontWeight: 300,
      fontSize: "36px",
      lineHeight: "25px",
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "montserrat",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "25px",
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: "montserrat",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "montserrat",
      fontWeight: "300",
      fontSize: "20px",
      lineHeight: "25px",
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "montserrat",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "montserrat",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: "montserrat",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "25px",
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "montserrat",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: "25px",
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "montserrat",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "25px",
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "montserrat",
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "22px",
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: "montserrat",
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "montserrat",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: "montserrat",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};
export default neumorphism;