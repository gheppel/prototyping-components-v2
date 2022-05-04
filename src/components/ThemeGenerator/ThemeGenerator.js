import React from "react";
import { mergeThemes } from "../../theming/utils/mergeThemes";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import CopyThemeButton from "./CopyThemeButton";
import SettingsPanel from "./SettingsPanel";
import { ThemeProvider } from "@mui/material/styles";
import LiveViewDummy from "./LiveViewDummy";
import { createTheme } from "@mui/material/styles";
import ResetButton from "./ResetButton";

export const ThemeGeneratorContext = React.createContext({});
// let computedTheme = mergeThemes({ resetTheme: true });

function ThemeGenerator(props) {
  const [themeProps, setThemeProps] = React.useState({});
  const [theme, setTheme] = React.useState(() => {
    //   //init theme from localStorage
    //   // let localTheme = localStorage.getItem("MUIdS_theme");
    //   // // console.log("local theme is", localTheme);
    //   // if (localTheme) {
    //   //   //theme exists already
    //   //   // console.log(JSON.parse(localTheme));
    //   //   return JSON.parse(localTheme);
    //   // } else {
    //   //
    // console.log("first load or storage was cleared, get default theme");
    return mergeThemes({ resetTheme: true });
    // }
  });
  const [reset, triggerReset] = React.useState(false);
  // const [defaultThemes, setDefaultThemes] = React.useState({
  //   light: createTheme({ palette: { mode: "light" } }),
  //   dark: createTheme({ palette: { mode: "dark" } }),
  // });
  // const updateThemeProps = (newThemeProps) => {
  //   //merge new themeProps with old themeProps
  //   setThemeProps((oldThemeProps) => {
  //     let mergedProps = { ...oldThemeProps, ...newThemeProps };
  //     return { ...mergedProps };
  //   });
  // };

  React.useEffect(() => {
    console.log("new props", themeProps);
    // console.log("new theme: ", mergeThemes(themeProps));
    // if (themeProps.resetTheme) {
    //   //reset theme
    //   setTheme(mergeThemes({ resetTheme: true }));
    // } else {
    //   setTheme(mergeThemes({ ...themeProps }));
    // }
    // let newTheme = createTheme(themeProps);
    if (Object.keys(themeProps).length > 0) {
      //WORKS!!!

      // setTheme((oldTheme) => {
      //   let newTheme = createTheme(themeProps);
      //   console.log("old theme was ", oldTheme);
      //   console.log("new theme should be ", newTheme);
      //   return newTheme;
      // });

      // ####
      if (themeProps.resetTheme) {
        //reset theme
        setTheme(mergeThemes({ resetTheme: true }));
        triggerReset(true);
        setThemeProps({});
      } else {
        setTheme((oldTheme) => {
          let newTheme = mergeThemes(themeProps);
          console.log("old theme was ", oldTheme);
          console.log("new theme should be ", newTheme);
          return newTheme;
        });
      }
    }
  }, [themeProps]);
  React.useEffect(() => {
    // computedTheme = theme;
    console.log("theme state was updated", theme);
    //save to lS if new
    // let currentLocalTheme = localStorage.getItem("MUIdS_theme");
    // if (currentLocalTheme !== JSON.stringify(theme)) {
    //   localStorage.setItem("MUIdS_theme", JSON.stringify(theme));
    // }
  }, [theme]);
  React.useEffect(() => {
    if (reset) {
      console.log("reset was triggered");
      triggerReset(false);
    }
  }, [reset]);
  return (
    <ThemeGeneratorContext.Provider
      value={[themeProps, setThemeProps, theme, setTheme, reset]}
    >
      <ThemeProvider theme={theme}>
        <Box container flexDirection="column" height="100%" width="100%">
          <Paper
            sx={{ height: "100%", width: "100%" }}
            elevation={0}
            square={true}
          >
            <Grid
              container
              height="100%"
              width="100%"
              flexDirection="column"
              flexWrap="nowrap"
            >
              {/* Heading */}
              <Grid
                container
                padding="15px"
                alignItems="center"
                flexWrap="nowrap"
              >
                <Grid item mr={4}>
                  <Typography
                    variant="h4"
                    color="text.primary"
                    align="left"
                    display="inline"
                  >
                    MUI Theme Generator
                  </Typography>
                </Grid>
                <Grid item mr={4}>
                  <ResetButton
                    buttonVariant="contained"
                    buttonLabel="reset theme object"
                  />
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  flexDirection="row"
                  display="flex"
                  height="50px"
                >
                  <CopyThemeButton
                    buttonVariant="contained"
                    buttonLabel="copy theme object"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                flexGrow="1"
                flexDirection="row"
                flexWrap="nowrap"
                maxHeight="calc(100% - 80px)"
              >
                {/* Settingspanel */}
                <Grid
                  item
                  flexGrow="1"
                  // pl={2}
                  // pr={1}
                  p={2}
                  sx={{ resize: "horizontal", overflow: "auto" }}
                  // width="50%"
                  maxHeight="100%"
                >
                  <Paper sx={{ height: "100%", width: "100%" }} elevation={2}>
                    <Box
                      height="100%"
                      width="100%"
                      overflow="scroll"
                      // pl={2}
                      // pr={1}
                      sx={{
                        "&::-webkit-scrollbar": {
                          width: "8px",
                          height: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                          background: theme.palette.background.paper,
                          "-webkit-border-radius": "10px",
                          borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          "-webkit-border-radius": "10px",
                          borderRadius: "10px",
                          background: theme.palette.primary.light,
                        },
                      }}
                    >
                      <SettingsPanel></SettingsPanel>
                    </Box>
                  </Paper>
                </Grid>
                {/* LiveView */}
                <Grid
                  item
                  flexGrow="1"
                  ml={1}
                  mr={2}
                  mb={2}
                  mt={2}
                  // maxWidth="50%"
                >
                  <Paper sx={{ height: "100%", width: "100%" }} elevation={2}>
                    <Box
                      height="100%"
                      width="100%"
                      overflow="scroll"
                      // pl={2}
                      // pr={1}
                      sx={{
                        "&::-webkit-scrollbar": {
                          width: "8px",
                          height: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                          background: theme.palette.background.paper,
                          "-webkit-border-radius": "10px",
                          borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          "-webkit-border-radius": "10px",
                          borderRadius: "10px",
                          background: theme.palette.primary.light,
                        },
                      }}
                    >
                      <Typography variant="h5" p="10px" align="left">
                        Live View
                      </Typography>
                      <Box sx={{ p: "10px" }}>
                        <LiveViewDummy></LiveViewDummy>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </ThemeProvider>
    </ThemeGeneratorContext.Provider>
  );
}

export default ThemeGenerator;
