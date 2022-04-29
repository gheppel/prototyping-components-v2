import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ThemeGeneratorContext } from "./ThemeGenerator";
import PropTypes from "prop-types";

function BasicTextField(props) {
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );
  const [value, setValue] = React.useState(props.defaultValue);

  function handleChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
    setThemeProps((oldProps) => {
      return {
        palette: {
          primary: {
            main: event.target.value,
          },
        },
      };
    });
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
        helperText={props.helperText}
        value={value}
        onChange={handleChange}
        placeholder={props.placeholder}
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
};
export default BasicTextField;
