import React from "react";
import { mergeThemes } from "../../theming/utils/mergeThemes";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import ButtonWithAlert from "./ButtonWithAlert";
import SettingsPanel from "./SettingsPanel";
import { ThemeProvider } from "@mui/material/styles";
import LiveViewDummy from "./LiveViewDummy";
import { createTheme } from "@mui/material";
import ResetButton from "./ResetButton";

export const ThemeGeneratorContext = React.createContext({});
// let computedTheme = mergeThemes({ resetTheme: true });

function ThemeGenerator(props) {
  const [themeProps, setThemeProps] = React.useState({});
  const [theme, setTheme] = React.useState(() => {
    //init theme from localStorage
    // let localTheme = localStorage.getItem("MUIdS_theme");
    // // console.log("local theme is", localTheme);
    // if (localTheme) {
    //   //theme exists already
    //   // console.log(JSON.parse(localTheme));
    //   return JSON.parse(localTheme);
    // } else {
    //first load or storage was cleared, get default theme
    return mergeThemes({ resetTheme: true });
    // }
  });
  const [updated, setUpdated] = React.useState({ updated: 0 });

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
    setTheme({ ...createTheme(themeProps) });
  }, [themeProps]);
  React.useEffect(() => {
    // computedTheme = theme;
    setUpdated((num) => {
      return { updated: num++ };
    });
    //save to lS if new
    let currentLocalTheme = localStorage.getItem("MUIdS_theme");
    if (currentLocalTheme !== JSON.stringify(theme)) {
      localStorage.setItem("MUIdS_theme", JSON.stringify(theme));
    }
  }, [theme]);

  return (
    <ThemeGeneratorContext.Provider
      value={[themeProps, setThemeProps, theme, setTheme]}
    >
      <ThemeProvider theme={theme}>
        <Box container flexDirection="column" height="100%" width="100%">
          <Paper
            sx={{ height: "100%", width: "100%" }}
            elevation={0}
            square={true}
          >
            <Grid container height="100%" width="100%" flexDirection="column">
              {/* Heading */}
              <Grid container padding="15px" alignItems="center">
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
                <Grid item flexGrow="1">
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
                  <ButtonWithAlert
                    buttonVariant="contained"
                    buttonLabel="copy theme object"
                  />
                </Grid>
              </Grid>
              <Grid container flexGrow="1" flexDirection="row">
                {/* Settingspanel */}
                <Grid
                  item
                  flexGrow="1"
                  // pl={2}
                  // pr={1}
                  p={2}
                  sx={{ resize: "horizontal", overflow: "auto" }}
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
                <Grid item flexGrow="1" ml={1} mr={2} mb={2} mt={2}>
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
                      <LiveViewDummy></LiveViewDummy>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        {/* <Box height="100vh" width="100vw"> */}
        {/* <Paper
            elevation={0}
            square={true}
            sx={{ width: "100%", height: "100%" }}
          >
            <Grid container height="100%" width="100%">
              <Grid
                container
                xs={12}
                m={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                height="56px"
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
                <Grid item>
                  <Box
                    mr={4}
                    alignItems="center"
                    flexDirection="row"
                    display="flex"
                  >
                    <ButtonWithAlert
                      buttonVariant="contained"
                      buttonLabel="copy theme object"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                flexGrow="1"
                mb="10px"
                justifyContent="space-between"
              > */}
        {/* <Box height="100%" width="calc(50% - 14px)" ml="10px" mb="10px">
                  <Paper elevation={2} sx={{ height: "100%", width: "100%" }}>
                    <Box
                      height="100%"
                      width="100%"
                      overflow="scroll"
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
                </Box> */}
        {/* <Box height="100%" width="calc(50% - 14px)" mr="10px">
                  <Paper elevation={2} sx={{ height: "100%", width: "100%" }}>
                    <Box
                      height="100%"
                      width="100%"
                      overflow="scroll"
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
                          background: theme.palette.secondary.light,
                        },
                      }}
                    ></Box>
                  </Paper>
                </Box> */}
        {/* </Grid>
            </Grid>
          </Paper> */}
        {/* <div style="display:flex; flex-flow:column nowrap"><div style="background-color:green"><h2>Test</h2></div>
          <div style="background-color:red"></div></div> */}
        {/* </Box> */}
      </ThemeProvider>
    </ThemeGeneratorContext.Provider>
  );
}

export default ThemeGenerator;
