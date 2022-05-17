import * as React from "react";
import { Box } from "@mui/system";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import PropTypes from "prop-types";
import { decomposeColor } from "@mui/system/esm/colorManipulator";
import { RgbaStringColorPicker } from "react-colorful";
import { Popper, Paper, TextField, ClickAwayListener } from "@mui/material";
import validateColor from "../../theming/utils/validateColor";
const rgba = require("rgba-convert");

// color picker: https://github.com/Simonwep/pickr

function BasicTextField(props) {
  const [themeProps, setThemeProps, theme, , reset] = React.useContext(
    ThemeGeneratorContext
  );
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
  const [pickerColor, setPickerColor] = React.useState(() => {
    if (props.type === "color") {
      // console.log(props.defaultValue);
      //props.defaultValue might be HEX or RGBA or something else
      //convert to rgba
      // const convertedColor = convertToHex(props.defaultValue);
      const convertedColor = rgba.css(props.defaultValue);
      return convertedColor;
    } else {
      return "";
    }
  });

  const [stateProps, setStateProps] = React.useState({
    error: false,
    helperText: props.helperText,
  });
  const [popperOpen, setPopperOpen] = React.useState(false);
  const [lastActionFrom, updateLastActionTo] = React.useState("");

  function isAColor(color) {
    try {
      decomposeColor(color);
      return true;
    } catch (error) {
      return false;
    }
  }

  function handleColorPickerChange(color) {
    const converted = rgba.hex(color);
    setPickerColor(color);
    setValue(converted);
    updateLastActionTo("colorPicker");
  }

  function handleChange(source, eventOrRgba) {
    // console.log("source: ", source, "eventorrgba ", eventOrRgba);

    if (props.type === "color") {
      if (source === "textField") {
        updateLastActionTo("textField");

        //might be broken, HEX, RGB, RGBA or something else
        let color;
        if (typeof eventOrRgba === "object") {
          //is an event
          color = eventOrRgba.target.value;
        } else if (typeof eventOrRgba === "string") {
          //is a color code
          color = eventOrRgba;
        }

        //check the value

        if (isAColor(color) && validateColor(color)) {
          setValue(color);
          setThemeProps((oldProps) => {
            return { ...oldProps, [props.themeProp]: color };
          });
          const converted = rgba.css(color);
          setPickerColor(converted);
          //reset any error messages
          setStateProps({ error: false, helperText: props.helperText });
        } else {
          //broken color code
          setValue(color);
          setStateProps({ error: true, helperText: "Unsupported color code" });
        }
      } else if (source === "colorPicker") {
        //should be RGBA
        //convert to hex
        const converted = rgba.hex(eventOrRgba);

        // setValue(color);
        setThemeProps((oldProps) => {
          return { ...oldProps, [props.themeProp]: converted };
        });
        //reset any error messages
        setStateProps({ error: false, helperText: props.helperText });
      }
    } else {
      //not a color, should be an event
      setValue(eventOrRgba.target.value);
      console.log("setting theme to", eventOrRgba.target.value);
      setThemeProps((oldProps) => {
        return { ...oldProps, [props.themeProp]: eventOrRgba.target.value };
      });
    }
  }

  React.useEffect(() => {
    if (reset) {
      setValue("");
      setPickerColor(() => {
        if (props.type === "color") {
          const convertedColor = rgba.css(props.defaultValue);
          return convertedColor;
        } else {
          return "";
        }
      });
    }
  }, [reset]);

  function handleClickAway() {
    if (pickerColor !== "" && pickerColor && popperOpen === true) {
      //a picker color was chosen and the popper closed
      handleChange(
        lastActionFrom,
        lastActionFrom === "textField" ? value : pickerColor
      );
      setPopperOpen(false);
    }
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway} mouseEvent="onMouseDown">
      <Box
        component="form"
        sx={{ my: 2, ml: 2, width: props.width }}
        autoComplete="off"
        id={props.themeProp + "_container"}
        noValidate
      >
        <TextField
          id={props.themeProp + "_input"}
          label={props.label}
          variant="outlined"
          helperText={stateProps.helperText}
          value={value}
          onChange={(event) => {
            handleChange("textField", event);
          }}
          placeholder={"default: " + props.defaultValue}
          error={stateProps.error}
          onFocus={() => {
            setPopperOpen(true);
          }}
        />
        {props.type === "color" ? (
          <Popper
            id={props.themeProp + "_popper"}
            open={popperOpen}
            anchorEl={document.querySelector("#" + props.themeProp + "_input")}
            placement="top-start"
            sx={{ zIndex: 9000, bottom: "12px !important" }}
          >
            <Paper elevation={5}>
              <Box sx={{ p: 1, borderRadius: theme.shape.borderRadius }}>
                <RgbaStringColorPicker
                  color={pickerColor}
                  onChange={handleColorPickerChange}
                />
              </Box>
            </Paper>
          </Popper>
        ) : null}
      </Box>
    </ClickAwayListener>
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
