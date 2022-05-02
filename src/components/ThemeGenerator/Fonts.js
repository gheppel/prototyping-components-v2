import React from "react";
import FontsSection from "./FontsSection";
import { Grid, Typography } from "@mui/material";
import BasicTextField from "./BasicTextfield";
import { ThemeGeneratorContext } from "./ThemeGenerator";

function Fonts() {
  const [, , theme, , ,] = React.useContext(ThemeGeneratorContext);
  const variants = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "button",
    "caption",
    "overline",
  ];
  const generalProperties = [
    "htmlFontSize",
    "fontFamily",
    "fontSize",
    "fontWeightLight",
    "fontWeightRegular",
    "fontWeightMedium",
    "fontWeightBold",
  ];

  return (
    <React.Fragment>
      <Grid container flexDirection="column">
        <Grid item p={2}>
          <Typography variant="h6" display="inline">
            General Settings
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            {generalProperties.map((property) => (
              <Grid item>
                <BasicTextField
                  type="font"
                  themeProp={property}
                  themeAccessor={"theme.typography." + property}
                  label={property}
                  defaultValue={theme.typography[property]}
                  helperText={"Choose a global " + property}
                  width="180px"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {variants.map((variant) => (
        <FontsSection variant={variant} />
      ))}
    </React.Fragment>
  );
}
export default Fonts;
