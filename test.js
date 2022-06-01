import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/system";

// function App() {
//   var theme = {
//     palette: {
//       primary: {
//         main: "#1976d2",
//         light: "#42a5f5",
//         dark: "#1565c0",
//         contrastText: "#fff",
//       },
//       ...
//     },
//     typography: {
//       fontFamily: "Roboto, Helvetica, Arial, sans-serif",
//       fontSize: 14,
//       h1: {
//         fontFamily: "Roboto, Helvetica, Arial, sans-serif",
//         fontWeight: 300,
//         fontSize: "6rem",
//         lineHeight: 1.167,
//         letterSpacing: "-0.01562em",
//       },
//       ...
//     }
//     ...
//   };

//   createTheme({primary: {main: #0f0}})

//   return (
//     <React.Fragment>
//       <Button variant="contained">Hello World</Button>
//       <ThemeProvider theme={theme}>
//         <KindElemente />
//       </ThemeProvider>
//     </React.Fragment>
//   );
// }

// import React from "react";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import boilerplateTheme from "./boilerplate-theme";

// const theme = createTheme(boilerplateTheme);

// export default function UXPinWrapper({ children }) {

//   return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
// }

<UXPinWrapper>
  <ThemeProvider theme={globalTheme}>
    ...
    <ThemeSwitcher>
      <ThemeProvider theme={localTheme}>...</ThemeProvider>
    </ThemeSwitcher>
  </ThemeProvider>
</UXPinWrapper>;
