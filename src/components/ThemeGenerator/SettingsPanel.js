import React from "react";
import { Grid } from "@mui/material";
import TabsNavigation from "./TabsNavigation";

function SettingsPanel(props) {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="left"
      sx={{ maxWidth: "100%" }}
    >
      <Grid item sx={{ maxWidth: "100%" }} id="settingsPanel">
        <TabsNavigation></TabsNavigation>
      </Grid>
    </Grid>
  );
}

export default SettingsPanel;
