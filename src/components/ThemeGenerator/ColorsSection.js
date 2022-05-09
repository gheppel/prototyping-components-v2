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
          {props.children.map((child, i) => {
            const childSplit = child.split("_");
            // console.log(childSplit);
            const isMiscellaneous = miscellaneousProps.some(
              (miscellaneousProp) => childSplit.includes(miscellaneousProp)
            );
            return (
              <Grid item key={i}>
                <Grid container alignItems="flex-start">
                  {childSplit.length === 1 ? (
                    // color with indicator
                    <React.Fragment>
                      <Grid item class="normalColor">
                        <BasicTextField
                          type="color"
                          themeProp={
                            "palette_" +
                            props.variant +
                            (childSplit[0] === "main"
                              ? ""
                              : "_" + childSplit[0])
                          }
                          themeAccessor={
                            "theme.palette." + [props.variant] + childSplit[0]
                          }
                          label={childSplit[0]}
                          defaultValue={
                            theme.palette[props.variant][childSplit[0]]
                          }
                          helperText={
                            "Choose a " +
                            childSplit[0] +
                            " variant for the " +
                            props.variant +
                            " color"
                          }
                          width="216px"
                        />
                      </Grid>
                      <Grid item pt="16px" ml={2}>
                        <Indicator
                          theme={theme}
                          variant={props.variant}
                          colorVariant={childSplit[0]}
                        />
                      </Grid>
                    </React.Fragment>
                  ) : (
                    //colorvalue without indicator
                    <React.Fragment>
                      <Grid item mr="72px">
                        <BasicTextField
                          type="number"
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
                          width="216px"
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
    "text",
    "background",
    "action",
    "common",
    "grey",
    "miscellaneous",
  ]),
};
export default ColorsSection;
