import React from "react";
import FontsSection from "./FontsSection";
import {
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Button,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
import BasicTextField from "./BasicTextfield";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

function Fonts() {
  const [, , theme, , ,] = React.useContext(ThemeGeneratorContext);
  const [customFonts, setCustomFonts] = React.useState("");
  const [alertOptions, setAlertOptions] = React.useState({
    open: false,
    type: "success",
    success: { severity: "success", message: "Font(s) added successfully!" },
    duplicate: { severity: "warning", message: "Font(s) already installed" },
    empty: { severity: "warning", message: "No font(s) given" },
  });
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
  function handleCustomFontsChange() {
    //setCustomFonts(event.target.value)
    let changedCustomFonts = document.querySelector(
      "#MUICustomFontsInput"
    ).value;
    if (customFonts !== changedCustomFonts) {
      setCustomFonts(changedCustomFonts);
    }
    if (changedCustomFonts === "") {
      setAlertOptions((old) => {
        return { ...old, type: "empty", open: true };
      });
    } else {
      setAlertOptions((old) => {
        return { ...old, type: "duplicate", open: true };
      });
    }
  }
  function addFont(link, index) {
    let newFontLink = document.createElement("link");
    newFontLink.href = link;
    newFontLink.rel = "stylesheet";
    newFontLink.id = "muiCCustomFont" + index;
    document.head.appendChild(newFontLink);
  }
  React.useEffect(() => {
    if (customFonts !== "") {
      console.log("typeof: ", typeof customFonts, customFonts);
      customFonts.split("|").forEach((font, index) => {
        if (
          document.querySelectorAll("link[href='" + font + "']").length === 0
        ) {
          addFont(font, index);
          setAlertOptions((old) => {
            return { ...old, type: "success", open: true };
          });
        }
      });
    }
    // if (props.deleteCustomFonts === true) {
    //   document
    //     .querySelectorAll("link[id*='muiCCustomFont']")
    //     .forEach((font) => font.remove());
    // }
  }, [customFonts]);

  return (
    <React.Fragment>
      <Grid container flexDirection="column">
        <Grid item>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"fontssection_generalsettings"}
              id={"fontssection_generalsettings"}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, .05)"
                    : "rgba(0, 0, 0, .03)",
              }}
            >
              <Typography variant="h6">General Settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                {generalProperties.map((property, i) => (
                  <Grid item key={i}>
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
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"fontssection_customFonts"}
              id={"fontssection_customFonts"}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, .05)"
                    : "rgba(0, 0, 0, .03)",
              }}
            >
              <Typography variant="h6">Custom Fonts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item maxWidth="100%" mb={2}>
                  <Alert severity="warning">
                    <AlertTitle>Reminder</AlertTitle>You have to copy the font
                    link into the theme customizer component in UXPin as well to
                    make it work there too.
                  </Alert>
                </Grid>
                <Grid item maxWidth="100%" mb={2}>
                  <Alert severity="info">
                    <AlertTitle>Font Links</AlertTitle>If you want to add Lato
                    from Google fonts, just paste the value from the href
                    attribute here like this:
                    https://fonts.googleapis.com/css2?family=Lato:ital,
                    wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap
                  </Alert>
                </Grid>
                <Grid item maxWidth="100%" mb={2}>
                  <Alert severity="info">
                    <AlertTitle>fontFamily value</AlertTitle>For some fonts you
                    have to add a classification after the font name, like for
                    Ubuntu Mono: "Ubuntu Mono, monospace"
                  </Alert>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    flexDirection="row"
                    alignItems="flex-start"
                    flexWrap="nowrap"
                  >
                    <Grid item></Grid>
                    <Grid item>
                      <Box component="form" noValidate autoComplete="off">
                        <TextField
                          id="MUICustomFontsInput"
                          multiline
                          placeholder="font url(s)"
                          helperText="Adds given font links (e.g., Google webfont links) to the html head. Separate multiple links with a pipe ('|')"
                        />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        sx={{ ml: 2 }}
                        onClick={handleCustomFontsChange}
                      >
                        Apply
                      </Button>
                      <Snackbar
                        open={alertOptions.open}
                        autoHideDuration={6000}
                        onClose={() => {
                          setAlertOptions((old) => {
                            return { ...old, open: false };
                          });
                        }}
                      >
                        <Alert
                          severity={alertOptions[alertOptions.type].severity}
                          onClose={() => {
                            setAlertOptions((old) => {
                              return { ...old, open: false };
                            });
                          }}
                          sx={{ width: "100%" }}
                        >
                          {alertOptions[alertOptions.type].message}
                        </Alert>
                      </Snackbar>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      {variants.map((variant, i) => (
        <FontsSection variant={variant} key={i} />
      ))}
    </React.Fragment>
  );
}
export default Fonts;
