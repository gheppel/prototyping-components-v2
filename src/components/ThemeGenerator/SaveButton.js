import React from "react";
import { Button, Alert, Collapse, Grid, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import defaultTheme from "../UXPinWrapper/default-theme";
import { mergeThemes } from "../../theming/utils/mergeThemes";

function SaveButton(props) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "Theme was saved to localStorage!",
    severity: "success",
  });
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );
  const saveTheme = () => {
    const openAlert = (success) => {
      setOpen(false);
      setAlert(
        success
          ? {
              message: "Theme was saved to localStorage!",
              severity: "success",
            }
          : {
              message: "Oops, something wrent wrong :(",
              severity: "error",
            }
      );
      setTimeout(() => {
        setOpen(true);
      }, 150);
    };

    // setThemeProps({ resetTheme: true });
    localStorage.setItem("theme", JSON.stringify(theme));
    openAlert(true);
  };

  return (
    <Grid item>
      <Button
        variant={props.buttonVariant}
        color="success"
        onClick={() => {
          saveTheme();
        }}
      >
        {props.buttonLabel}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          severity={alert.severity}
          onClose={() => {
            setOpen(false);
          }}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Grid>
    // </Grid>
  );
}

export default SaveButton;
