import React from "react";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import { Grid } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

function ButtonWithAlert(props) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "Theme reset, you can start fresh!",
    severity: "success",
  });
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );
  const resetTheme = () => {
    const openAlert = (success) => {
      setOpen(false);
      setAlert(
        success
          ? {
              message: "Theme reset, you can start fresh!",
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

    setThemeProps({ resetTheme: true });
    openAlert(true);
  };

  return (
    <Grid item>
      <Button
        variant={props.buttonVariant}
        color="warning"
        onClick={() => {
          resetTheme();
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
  );
}

export default ButtonWithAlert;
