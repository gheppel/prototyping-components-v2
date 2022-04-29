import React from "react";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import BasicSelect from "./BasicSelect";
import BasicTextField from "./BasicTextfield";
import { Grid, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import BrightnessIcon from "@mui/icons-material/Brightness1";

function Indicator(props) {
  return (
    <Box
      sx={{
        width: "54px",
        height: "54px",
        backgroundColor: props.theme.palette[props.variant][props.colorVariant],
        borderRadius: props.theme.shape.borderRadius,
        border: "1px solid #000",
      }}
    ></Box>
  );
}
function ColorsSection(props) {
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );
  return (
    <Grid container flexDirection="column">
      <Grid item flexGrow="1" p={2}>
        <Typography variant="h6">{props.title}</Typography>
      </Grid>
      <Grid item>
        {props.type === "main" ? (
          <Grid container>
            <Grid item>
              <Grid container alignItems="flex-start" mr={3}>
                <Grid item>
                  <BasicTextField
                    themeProp={"palette_" + props.variant}
                    label={props.title}
                    placeholder="e.g., #fff"
                    defaultValue={theme.palette[props.variant].main}
                    helperText={"Choose a " + props.variant + " color"}
                    width="180px"
                  />
                </Grid>
                <Grid item pt="8px" ml={2}>
                  <Indicator
                    theme={theme}
                    variant={props.variant}
                    colorVariant="main"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="flex-start" mr={3}>
                <Grid item>
                  <BasicTextField
                    themeProp={"palette_" + props.variant + "_light"}
                    label={props.title + "_light"}
                    placeholder="e.g., #fff"
                    defaultValue={theme.palette[props.variant].light}
                    helperText={
                      "Choose a " + props.variant + "_light" + " color"
                    }
                    width="180px"
                  />
                </Grid>
                <Grid item pt="8px" ml={2}>
                  <Indicator
                    theme={theme}
                    variant={props.variant}
                    colorVariant="light"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="flex-start" mr={3}>
                <Grid item>
                  <BasicTextField
                    themeProp={"palette_" + props.variant + "_dark"}
                    label={props.title + "_dark"}
                    placeholder="e.g., #fff"
                    defaultValue={theme.palette[props.variant].dark}
                    helperText={
                      "Choose a " + props.variant + "_dark" + " color"
                    }
                    width="180px"
                  />
                </Grid>
                <Grid item pt="8px" ml={2}>
                  <Indicator
                    theme={theme}
                    variant={props.variant}
                    colorVariant="dark"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="flex-start" mr={3}>
                <Grid item>
                  <BasicTextField
                    themeProp={"palette_" + props.variant + "_contrastText"}
                    label={props.title + "_contrastText"}
                    placeholder="e.g., #fff"
                    defaultValue={theme.palette[props.variant].contrastText}
                    helperText={
                      "Choose a " + props.variant + "_contrastText" + " color"
                    }
                    width="180px"
                  />
                </Grid>
                <Grid item pt="8px" ml={2}>
                  <Indicator
                    theme={theme}
                    variant={props.variant}
                    colorVariant="contrastText"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
}
ColorsSection.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(["main", "other"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "info",
  ]),
};
export default ColorsSection;
