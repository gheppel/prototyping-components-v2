import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import TabsNavigation from "./TabsNavigation";

function SettingsPanel(props) {
  return (
    <Grid
      container
      xs="12"
      display="flex"
      flexDirection="column"
      justifyContent="left"
    >
      <Grid item>
        <Typography variant="h5" p="10px" align="left">
          Settings
        </Typography>
      </Grid>
      <Grid>
        <TabsNavigation />
      </Grid>
    </Grid>
  );
}

export default SettingsPanel;
