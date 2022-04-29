import React from "react";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import BasicSelect from "./BasicSelect";
import BasicTextField from "./BasicTextfield";
import { Grid } from "@mui/material";
import ColorsSection from "./ColorsSection";

function Colors(props) {
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );
  return (
    <Grid container>
      <Grid item></Grid>
      <ColorsSection title="Primary" type="main" variant="primary" />
      <ColorsSection title="Secondary" type="main" variant="secondary" />
      <ColorsSection title="Success" type="main" variant="success" />
      <ColorsSection title="Error" type="main" variant="error" />
      <ColorsSection title="Warning" type="main" variant="warning" />
      <ColorsSection title="Info" type="main" variant="info" />
    </Grid>
  );
}
export default Colors;
