import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import Snackbar from "@mui/material/Snackbar";

import { mergeThemes } from "../../theming/utils/mergeThemes";

function CopyThemeButton(props) {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState({
    message: "Theme object copied successfully to the clipboard!",
    severity: "success",
  });
  const [theme, setTheme] = React.useContext(ThemeGeneratorContext);
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
  // let message = "Theme object was copied to the clipboard!";
  // let severity = "success";
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
      {/* <Box mx={2}>
        <Collapse in={open}>
          <Alert
            severity={alert.severity}
            onClose={() => {
              setOpen(false);
            }}
          >
            {alert.message}
          </Alert>
        </Collapse>
      </Box> */}
    </React.Fragment>
  );
}

export default CopyThemeButton;
