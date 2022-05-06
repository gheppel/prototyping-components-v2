import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import PropTypes from "prop-types";
import { decomposeColor } from "@mui/system/esm/colorManipulator";
// import Pickr from "@simonwep/pickr";
// import "@simonwep/pickr/dist/themes/classic.min.css";
// color picker: https://github.com/Simonwep/pickr

function BasicTextField(props) {
  const [themeProps, setThemeProps, theme, , reset, pickers, setPickers] =
    React.useContext(ThemeGeneratorContext);
  // const [pickrInitialized, setPickrInitialized] = React.useState(false);
  const [value, setValue] = React.useState(() => {
    const keys = Object.keys(themeProps);
    if (keys.length > 0) {
      if (keys.some((key) => key === props.themeProp)) {
        //there are themeProps for this property already defined
        return themeProps[props.themeProp];
      } else {
        return "";
      }
    } else {
      return "";
    }
  });
  const [stateProps, setStateProps] = React.useState({
    error: false,
    helperText: props.helperText,
  });
  // const [initialized, initialize] = React.useState(false);

  function isAColor(color) {
    try {
      decomposeColor(color);
      return true;
    } catch (error) {
      return false;
    }
  }

  function handleChange(event) {
    console.log(event);
    if (props.type === "color") {
      //event is hexA color
      const color = event.target.value;
      if (isAColor(color)) {
        setValue(color);
        setThemeProps((oldProps) => {
          return { ...oldProps, [props.themeProp]: color };
        });
        //reset any error messages
        setStateProps({ error: false, helperText: props.helperText });
      } else {
        //broken color code
        setValue(color);
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

  React.useEffect(() => {
    if (reset) {
      setValue("");
    }
  }, [reset, props.themeAcessor]);

  return (
    <Box
      component="form"
      sx={{ my: 2, ml: 2, width: props.width }}
      autoComplete="off"
      noValidate
    >
      <TextField
        id={props.themeProp + "_input"}
        label={props.label}
        variant="outlined"
        helperText={stateProps.helperText}
        value={value}
        onChange={handleChange}
        placeholder={"default: " + props.defaultValue}
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
  type: PropTypes.oneOf(["color", "number", "font"]),
  defaultValue: PropTypes.string,
};
export default BasicTextField;
