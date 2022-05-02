import React from "react";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Box } from "@mui/system";
import BasicTextField from "./BasicTextfield";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Indicator(props) {
  return (
    <Box
      sx={{
        width: "54px",
        height: "54px",
        backgroundColor: props.theme.palette[props.variant][props.colorVariant],
        borderRadius: "50%",
        border: "1px solid",
        borderColor: props.theme.palette.divider,
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
      <Grid item flexGrow="0" p={2} display="inline" width="max-content">
        <Typography variant="h6" display="inline">
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        {props.type === "main" ? (
          <Grid container flexDirection="row">
            <Grid item>
              <Grid container alignItems="flex-start" mr={3}>
                {/* {Object.keys(props.children).map((child)=>(
                  <Grid item>
                  <BasicTextField
                    type="color"
                    themeProp={"palette_" + props.variant}
                    themeAccessor={"theme.palette." + [props.variant] + ".main"}
                    label={props.variant}
                    defaultValue={theme.palette[props.variant].main}
                    helperText={"Choose a " + props.variant + " color"}
                    width="180px"
                  />
                </Grid>
                ))} */}
                <Grid item>
                  <BasicTextField
                    type="color"
                    themeProp={"palette_" + props.variant}
                    themeAccessor={"theme.palette." + [props.variant] + ".main"}
                    label={props.variant}
                    defaultValue={theme.palette[props.variant].main}
                    helperText={"Choose a " + props.variant + " color"}
                    width="180px"
                  />
                </Grid>
                <Grid item pt="16px" ml={2}>
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
                    type="color"
                    themeProp={"palette_" + props.variant + "_light"}
                    themeAccessor={
                      "theme.palette." + [props.variant] + ".light"
                    }
                    label={"light"}
                    defaultValue={theme.palette[props.variant].light}
                    helperText={
                      "Choose a " + props.variant + "_light" + " color"
                    }
                    width="180px"
                  />
                </Grid>
                <Grid item pt="16px" ml={2}>
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
                    type="color"
                    themeProp={"palette_" + props.variant + "_dark"}
                    themeAccessor={"theme.palette." + [props.variant] + ".dark"}
                    label={"dark"}
                    defaultValue={theme.palette[props.variant].dark}
                    helperText={
                      "Choose a " + props.variant + "_dark" + " color"
                    }
                    width="180px"
                  />
                </Grid>
                <Grid item pt="16px" ml={2}>
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
                    type="color"
                    themeProp={"palette_" + props.variant + "_contrastText"}
                    themeAccessor={
                      "theme.palette." + [props.variant] + ".contrastText"
                    }
                    label={"contrastText"}
                    defaultValue={theme.palette[props.variant].contrastText}
                    helperText={"Choose a contrasting text color"}
                    width="180px"
                  />
                </Grid>
                <Grid item pt="16px" ml={2}>
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
