import React from "react";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import BasicSelect from "./BasicSelect";
import BasicTextField from "./BasicTextfield";
import { Grid } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";

function Settings(props) {
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );
  return (
    <Grid container flexWrap="nowrap" flexDirection="column">
      <Grid item>
        <Box sx={{ m: 2 }}>
          <Alert severity="error">
            <AlertTitle>Don't use enter</AlertTitle>
            Please refrain from using the enter key after entering values into
            textfields, as this will reload the page and all progress will be
            lost
          </Alert>
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
