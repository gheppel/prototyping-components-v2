import React from "react";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Box } from "@mui/system";
import BasicTextField from "./BasicTextfield";
import BasicSelect from "./BasicSelect";
import { MenuItem } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FontsSection(props) {
  const [, , theme, , ,] = React.useContext(ThemeGeneratorContext);
  const propertiesTextfield = [
    "fontFamily",
    "fontWeight",
    "fontSize",
    "lineHeight",
    "letterSpacing",
  ];
  const propertiesSelect = {
    textTransform: ["none", "lowercase", "uppercase", "capitalize"],
    textDecoration: ["none", "line-through", "overline", "underline"],
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"fontssection" + props.variant + "_header"}
        id={"fontssection" + props.variant + "_header"}
        // sx={{ borderBottom: "1px solid " + theme.palette.primary.main }}
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, .05)"
              : "rgba(0, 0, 0, .03)",
        }}
      >
        <Typography variant="h6">{props.variant}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container flexDirection="column">
          <Grid item>
            <Grid container flexDirection="row">
              {propertiesTextfield.map((property) => (
                <Grid item>
                  <BasicTextField
                    type="font"
                    themeProp={props.variant + "_" + property}
                    themeAccessor={
                      "theme.typography." + props.variant + "." + property
                    }
                    label={property}
                    defaultValue={theme.typography[props.variant][property]}
                    helperText={
                      "Choose a " +
                      property +
                      " for the " +
                      props.variant +
                      " element"
                    }
                    width="180px"
                  />
                </Grid>
              ))}
              {Object.keys(propertiesSelect).map((property) => (
                <Grid item>
                  <BasicSelect
                    width="180px"
                    label={property}
                    defaultValue={
                      theme.typography[props.variant][property]
                        ? theme.typography[props.variant][property]
                        : "none"
                    }
                    helperText={
                      "Choose a " +
                      property +
                      " for the " +
                      props.variant +
                      " element"
                    }
                    themeProp={props.variant + "_" + property}
                  >
                    {propertiesSelect[property].map((option) => (
                      <MenuItem value={option}>{option}</MenuItem>
                    ))}
                  </BasicSelect>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item p={2}>
            <Grid container flexDirection="column">
              <Grid item mb={2}>
                <Typography>Preview</Typography>
              </Grid>
              <Grid item>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant={props.variant} contenteditable="true">
                    Lorem ipsum dolor sit amet et constitum
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

FontsSection.propTypes = {
  variant: PropTypes.oneOf([
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
  ]),
  property: PropTypes.oneOf([
    "fontFamily",
    "fontWeight",
    "fontSize",
    "lineHeight",
    "letterSpacing",
    "textTransform",
  ]),
};
export default FontsSection;
