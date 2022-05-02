import React from "react";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import BasicSelect from "./BasicSelect";
import BasicTextField from "./BasicTextfield";
import { Grid } from "@mui/material";
import ColorsSection from "./ColorsSection";

function Colors(props) {
  return (
    <Grid container>
      <Grid item width="max-content">
        <ColorsSection title="Primary" type="main" variant="primary" />
      </Grid>
      <Grid item width="max-content">
        <ColorsSection title="Secondary" type="main" variant="secondary" />
      </Grid>
      <Grid item width="max-content">
        <ColorsSection title="Success" type="main" variant="success" />
      </Grid>
      <Grid item width="max-content">
        <ColorsSection title="Error" type="main" variant="error" />
      </Grid>
      <Grid item width="max-content">
        <ColorsSection title="Warning" type="main" variant="warning" />
      </Grid>
      <Grid item width="max-content">
        <ColorsSection title="Info" type="main" variant="info" />
      </Grid>
    </Grid>
  );
}
export default Colors;
