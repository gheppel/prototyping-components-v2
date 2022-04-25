import React from "react";
import { useTheme } from "@mui/styles";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import UXPinWrapper from "../UXPinWrapper/UXPinWrapper";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import ButtonWithAlert from "./ButtonWithAlert";
import SettingsPanel from "./SettingsPanel";
import { ThemeProvider } from "@mui/material/styles";

export const ThemeGeneratorContext = React.createContext({});

function ThemeGenerator(props) {
  const [theme, setTheme] = React.useState(useTheme());
  return (
    <UXPinWrapper>
      <ThemeGeneratorContext.Provider value={[theme, setTheme]}>
        <ThemeProvider theme={theme}>
          <Box height="100%" width="100%">
            <Paper
              elevation={0}
              square={true}
              //   sx={{ width: "100vw", height: "100vh" }}
            >
              <Grid container>
                <Grid
                  container
                  xs={12}
                  m={2}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  height="55.56px"
                >
                  <Typography
                    variant="h4"
                    color="text.primary"
                    align="left"
                    display="inline"
                    mr={4}
                  >
                    MUI Theme Generator
                  </Typography>
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
                <Grid
                  container
                  xs={12}
                  height="calc(100vh - 97.56px)"
                  mb="10px"
                  justifyContent="space-between"
                >
                  <Box
                    height="100%"
                    width="calc(50% - 14px)"
                    ml="10px"
                    mb="10px"
                  >
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
                  </Box>
                  <Box height="100%" width="calc(50% - 14px)" mr="10px">
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
                      ></Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </ThemeProvider>
      </ThemeGeneratorContext.Provider>
    </UXPinWrapper>
  );
}

export default ThemeGenerator;
