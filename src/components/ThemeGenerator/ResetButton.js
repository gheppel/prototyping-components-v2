import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { ThemeGeneratorContext } from "./ThemeGenerator";

import { mergeThemes } from "../../theming/utils/mergeThemes";

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
    // .then(
    //   () => {
    //     openAlert(true);
    //   },
    //   () => {
    //     openAlert(false);
    //   }
    // );
  };
  // let message = "Theme object was copied to the clipboard!";
  // let severity = "success";
  return (
    <React.Fragment>
      <Button
        variant={props.buttonVariant}
        color="warning"
        onClick={() => {
          resetTheme();
        }}
      >
        {props.buttonLabel}
      </Button>
      <Box mx={2}>
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
      </Box>
    </React.Fragment>
  );
}

export default ButtonWithAlert;
