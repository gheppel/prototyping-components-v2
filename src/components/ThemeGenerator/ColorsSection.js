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
  const miscellaneousProps = ["contrastThreshold", "divider", "tonalOffset"];
  // console.log(props.children);
  return (
    <Grid container flexDirection="column">
      <Grid item flexGrow="0" p={2} display="inline" width="max-content">
        <Typography variant="h6" display="inline">
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container flexDirection="row" mr={3}>
          {props.children.map((child) => {
            const childSplit = child.split("_");
            const isMiscellaneous = miscellaneousProps.some(
              (miscellaneousProp) => childSplit.includes(miscellaneousProp)
            );
            return (
              <Grid item>
                <Grid container alignItems="flex-start">
                  {childSplit.length === 1 ? (
                    //normal color with indicator
                    <React.Fragment>
                      <Grid item>
                        <BasicTextField
                          type="color"
                          themeProp={
                            "palette_" + props.variant + "_" + child !== "main"
                              ? child
                              : null
                          }
                          themeAccessor={
                            "theme.palette." + [props.variant] + child
                          }
                          label={child}
                          defaultValue={theme.palette[props.variant][child]}
                          helperText={
                            "Choose a " +
                            child +
                            " variant for the " +
                            props.variant +
                            " color"
                          }
                          width="180px"
                        />
                      </Grid>
                      <Grid item pt="16px" ml={2}>
                        <Indicator
                          theme={theme}
                          variant={props.variant}
                          colorVariant={child}
                        />
                      </Grid>
                    </React.Fragment>
                  ) : (
                    //miscellaneous color without indicator
                    <React.Fragment>
                      <Grid item mr="72px">
                        <BasicTextField
                          type="color"
                          themeProp={
                            isMiscellaneous
                              ? "palette_" + childSplit[0]
                              : "palette_" +
                                  props.variant +
                                  "_" +
                                  childSplit[0] !==
                                "main"
                              ? childSplit[0]
                              : null
                          }
                          themeAccessor={
                            isMiscellaneous
                              ? "theme.palette." + childSplit[0]
                              : "theme.palette." +
                                [props.variant] +
                                childSplit[0]
                          }
                          label={childSplit[0]}
                          defaultValue={
                            isMiscellaneous
                              ? theme.palette[childSplit[0]]
                              : theme.palette[props.variant][childSplit[0]]
                          }
                          helperText={
                            isMiscellaneous
                              ? "Choose a value for the " + childSplit[0]
                              : "Choose a " +
                                childSplit[0] +
                                " value for the " +
                                props.variant +
                                " color"
                          }
                          width="180px"
                        />
                      </Grid>
                      {childSplit[0] === "divider" ? (
                        //special case divider
                        <Grid item pt="16px" ml={2}>
                          <Box
                            sx={{
                              width: "54px",
                              height: "54px",
                              backgroundColor: theme.palette[childSplit[0]],
                              borderRadius: "50%",
                              border: "1px solid",
                              borderColor: theme.palette.divider,
                              ml: "-72px",
                            }}
                          ></Box>
                        </Grid>
                      ) : null}
                    </React.Fragment>
                  )}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
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
