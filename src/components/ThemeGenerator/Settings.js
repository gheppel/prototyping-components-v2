import React from "react";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Box } from "@mui/system";
import BasicSelect from "./BasicSelect";
import BasicTextField from "./BasicTextfield";
import {
  Alert,
  AlertTitle,
  TextField,
  MenuItem,
  Grid,
  createTheme,
} from "@mui/material";
import evaluateThemeObj from "../../theming/utils/evaluateThemeObj";

function Settings(props) {
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );
  const [themeObject, setThemeObject] = React.useState("");
  const [stateProps, setStateProps] = React.useState({
    error: false,
    helperText: "Paste a MUI theme object (JSON) here, if you have one already",
  });

  function handleThemeObjectChange(event) {
    const value = event.target.value;
    setThemeObject(value);

    if (value !== undefined && value !== "") {
      //not empty

      const result = evaluateThemeObj(value);
      if (result.passed) {
        setStateProps({ error: false, helperText: result.message });
        setThemeProps((other) => {
          return { ...other, themeObject: createTheme(result.theme) };
        });
      } else {
        setStateProps({ error: true, helperText: result.message });
      }
    } else {
      setStateProps({
        error: false,
        helperText: "Paste a MUI theme object here, if you have one already",
      });
    }
  }
  return (
    <Grid container flexWrap="nowrap" flexDirection="column">
      {/* <Grid item>
        <Box sx={{ m: 2 }}>
          <Alert severity="error">
            <AlertTitle>Don't use enter</AlertTitle>
            Please refrain from using the enter key after entering values into
            textfields, as this will reload the page and all progress will be
            lost
          </Alert>
        </Box>
      </Grid> */}
      <Grid item>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ my: 2, ml: 2 }}
        >
          <TextField
            id="MUIThemeObjectInput"
            multiline
            placeholder="{palette: {...}, ...}"
            label="MUI Theme Object"
            helperText={stateProps.helperText}
            error={stateProps.error}
            maxRows="4"
            onChange={handleThemeObjectChange}
            value={themeObject}
          />
        </Box>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <BasicSelect
              label="Theme"
              defaultValue="default"
              helperText="Start from an existing theme"
              themeProp="themeProfile"
            >
              <MenuItem value={"default"}>default</MenuItem>
              <MenuItem value={"light"}>light</MenuItem>
              <MenuItem value={"dark"}>dark</MenuItem>
              <MenuItem value={"hacker"}>hacker</MenuItem>
            </BasicSelect>
          </Grid>
          <Grid item>
            <BasicSelect
              label="Mode"
              defaultValue={theme.palette.mode}
              helperText="Choose a light or dark mode"
              themeProp="palette_mode"
            >
              <MenuItem value={"light"}>light</MenuItem>
              <MenuItem value={"dark"}>dark</MenuItem>
            </BasicSelect>
          </Grid>
          <Grid item>
            <BasicTextField
              themeProp="borderRadius"
              label="Border Radius"
              placeholder="e.g., 4px"
              defaultValue={theme.shape.borderRadius}
              helperText="Choose a global border radius for all components"
              width="180px"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Settings;
