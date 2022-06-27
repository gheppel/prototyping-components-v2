import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ColorsSection from "./ColorsSection";
import { Alert, AlertTitle } from "@mui/material";

function Colors(props) {
  const colorProps = {
    primary: ["main", "light", "dark", "contrastText"],
    secondary: ["main", "light", "dark", "contrastText"],
    success: ["main", "light", "dark", "contrastText"],
    error: ["main", "light", "dark", "contrastText"],
    warning: ["main", "light", "dark", "contrastText"],
    info: ["main", "light", "dark", "contrastText"],
    text: ["primary", "secondary", "disabled"],
    background: ["paper", "default"],
    action: [
      "active",
      "hover",
      "hoverOpacity_n",
      "selected",
      "selectedOpacity_n",
      "disabled",
      "disabledBackground",
      "disabledOpacity_n",
      "focus",
      "focusOpacity_n",
      "activatedOpacity_n",
    ],
    common: ["black", "white"],
    grey: [
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "A100",
      "A200",
      "A400",
      "A700",
    ],
    miscellaneous: ["contrastThreshold_n", "divider_n", "tonalOffset_n"],
  };
  // const generalProperties = ["divider", "tonalOffset", "contrastThreshold"];
  return (
    <Grid container flexDirection="column">
      <Grid item maxWidth="1250px">
        <Box sx={{ m: 2 }}>
          <Alert severity="info">
            <AlertTitle>Main Colors</AlertTitle>If not specified, light, dark
            and text colors will be computed automatically from the main color.
            The circles indicate the current color in the theme.
          </Alert>
        </Box>
      </Grid>
      {Object.keys(colorProps).map((colorProp, i) => (
        <Grid item width="100%" key={i} maxWidth="1250px">
          <ColorsSection title={colorProp} type="main" variant={colorProp}>
            {colorProps[colorProp]}
          </ColorsSection>
        </Grid>
      ))}
    </Grid>
  );
}
export default Colors;
