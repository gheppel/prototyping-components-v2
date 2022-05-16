import React from "react";
import { mergeThemes } from "../../theming/utils/mergeThemes";
import evaluateThemeObj from "../../theming/utils/evaluateThemeObj";
import { Box } from "@mui/system";
import { Paper, Grid, Typography } from "@mui/material";
import LiveViewDummy from "./LiveViewDummy";
import CopyThemeButton from "./CopyThemeButton";
import SettingsPanel from "./SettingsPanel";
import ResetButton from "./ResetButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapper";

export const ThemeGeneratorContext = React.createContext({});

const addFont = (link, index) => {
  let newFontLink = document.createElement("link");
  newFontLink.href = link;
  newFontLink.rel = "stylesheet";
  newFontLink.id = "muiCCustomFont" + index;
  document.head.appendChild(newFontLink);
  //console.log("added: ", newFontLink);
};

function ThemeGenerator(props) {
  const [themeProps, setThemeProps] = React.useState(() => {
    const localProps = localStorage.getItem("MUIdS_themeProps");
    //return local props if there are any, otherwise return an empty object
    return localProps !== null ? JSON.parse(localProps) : {};
  });
  const [theme, setTheme] = React.useState(() => {
    const localTheme = localStorage.getItem("MUIdS_theme");
    if (localTheme !== null) {
      //there is a theme already, load it
      const parsedLocalTheme = evaluateThemeObj(localTheme);
      if (parsedLocalTheme.passed) {
        //theme was parsed
        // console.log("loading local theme", parsedLocalTheme.theme);
        return createTheme(parsedLocalTheme.theme);
      } else {
        //theme seems to be broken, get default instead
        // console.log("loading default theme");
        return mergeThemes({ resetTheme: true });
      }
    } else {
      // console.log("loading default theme");
      return mergeThemes({ resetTheme: true });
    }
  });
  const [reset, triggerReset] = React.useState(false);
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);

  if (props.customFonts && props.customFonts !== "") {
    props.customFonts.split("|").forEach((font, index) => {
      if (document.querySelectorAll("link[href='" + font + "']").length === 0) {
        addFont(font, index);
      }
    });
  }
  if (props.deleteCustomFonts === true) {
    document
      .querySelectorAll("link[id*='muiCCustomFont']")
      .forEach((font) => font.remove());
  }

  React.useEffect(() => {
    //what to do if there are any themeProps
    if (Object.keys(themeProps).length > 0) {
      if (themeProps.resetTheme) {
        //reset theme
        setTheme(mergeThemes({ resetTheme: true }));
        triggerReset(true);
        setThemeProps({});
        localStorage.removeItem("MUIdS_theme");
        localStorage.removeItem("MUIdS_themeProps");
      } else {
        setTheme((oldTheme) => {
          let newTheme = mergeThemes(themeProps);
          // console.log("old theme was ", oldTheme);
          // console.log("new theme should be ", newTheme);
          return newTheme;
        });
        localStorage.setItem("MUIdS_themeProps", JSON.stringify(themeProps));
      }
    }
  }, [themeProps]);

  //saving the theme to local storage
  React.useEffect(() => {
    //save to lS if new
    let currentLocalTheme = localStorage.getItem("MUIdS_theme");

    if (currentLocalTheme !== JSON.stringify(theme)) {
      localStorage.setItem("MUIdS_theme", JSON.stringify(theme));
    }
  }, [theme]);

  //resetting triggerReset
  React.useEffect(() => {
    if (reset) {
      triggerReset(false);
    }
  }, [reset]);

  //updating the UXPinWrapper theme with props.themeObject
  React.useEffect(() => {
    let newTheme;
    setThemeOptions((oldTheme) => {
      let options = { ...props };

      //if there is a theme object given, it will be the basis for any customizations
      if (props.themeObject && props.themeObject !== "") {
        options.themeObject = createTheme({
          ...JSON.parse(JSON.stringify(props.themeObject)),
        });
      }
      newTheme = mergeThemes(options);
      // console.log("new theme using the given theme object: ", newTheme);
      setTheme(newTheme);
      return {
        theme: newTheme,
      };
    });
  }, [props.themeObject, setThemeOptions]);

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
                  <ResetButton buttonVariant="contained" buttonLabel="reset" />
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
                    buttonLabel="copy theme"
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
                  maxWidth="1300px"
                  width="50%"
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
                        {!props.children ? (
                          <LiveViewDummy></LiveViewDummy>
                        ) : (
                          props.children
                        )}
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
ThemeGenerator.propTypes = {
  /**
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  /**
   * Adds given font links (e.g., Google webfont links) to the html head. Separate multiple links with a pipe ("|")
   * @uxpincontroltype textfield(3)
   */
  customFonts: PropTypes.string,

  /**
   * Deletes all custom font links (e.g., Google webfont links) from the html head.
   */
  deleteCustomFonts: PropTypes.bool,

  /**
   * Add a theme object here, if you have one already. Missing properties will be calculated automatically. Works only when the default theme is selected
   */
  themeObject: PropTypes.object,
};
export default ThemeGenerator;
