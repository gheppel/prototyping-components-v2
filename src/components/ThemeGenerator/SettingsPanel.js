import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import TabsNavigation from "./TabsNavigation";
import BasicSelect from "./BasicSelect";
import { MenuItem } from "@mui/material";

function SettingsPanel(props) {
  return (
    <Grid container display="flex" flexDirection="column" justifyContent="left">
      <Grid item>
        <Typography variant="h5" p="10px" align="left">
          Customization
        </Typography>
      </Grid>
      <Grid>
        <TabsNavigation></TabsNavigation>
      </Grid>
    </Grid>
  );
}

export default SettingsPanel;
