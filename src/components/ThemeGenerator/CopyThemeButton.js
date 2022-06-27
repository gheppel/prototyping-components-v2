import React from "react";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import Snackbar from "@mui/material/Snackbar";

function CopyThemeButton(props) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "Theme object copied successfully to the clipboard!",
    severity: "success",
  });
  const [, , theme] = React.useContext(ThemeGeneratorContext);
  const copyTheme = () => {
    const openAlert = (success) => {
      setOpen(false);
      setAlert(
        success
          ? {
              message: "Theme object copied successfully to the clipboard!",
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
    console.log(theme);
    navigator.clipboard.writeText(JSON.stringify(theme)).then(
      () => {
        openAlert(true);
      },
      () => {
        openAlert(false);
      }
    );
  };

  return (
    <React.Fragment>
      <Button
        variant={props.buttonVariant}
        onClick={() => {
          copyTheme();
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
    </React.Fragment>
  );
}

export default CopyThemeButton;
