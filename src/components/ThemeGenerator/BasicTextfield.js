import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import PropTypes from "prop-types";
import { decomposeColor, hexToRgb } from "@mui/system/esm/colorManipulator";

function BasicTextField(props) {
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );

  const [value, setValue] = React.useState(props.defaultValue);
  const [stateProps, setStateProps] = React.useState({
    error: false,
    helperText: props.helperText,
  });
  function isAColor(color) {
    try {
      decomposeColor(color);
      return true;
    } catch (error) {
      return false;
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    if (props.type === "color") {
      if (isAColor(event.target.value)) {
        setValue(event.target.value);
        setThemeProps((oldProps) => {
          return { ...oldProps, [props.themeProp]: event.target.value };
        });
        setStateProps({ error: false, helperText: props.helperText });
      } else {
        //broken color code
        setValue(event.target.value);
        setStateProps({ error: true, helperText: "Unsupported color code" });
      }
    } else {
      //not a color
      setValue(event.target.value);
      setThemeProps((oldProps) => {
        return { ...oldProps, [props.themeProp]: event.target.value };
      });
    }
  }

  return (
    <Box
      component="form"
      sx={{ my: 2, ml: 2, width: props.width }}
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        helperText={stateProps.helperText}
        value={value}
        onChange={handleChange}
        placeholder={props.placeholder}
        error={stateProps.error}
      />
    </Box>
  );
}
BasicTextField.propTypes = {
  themeProp: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.oneOf(["color"]),
};
export default BasicTextField;