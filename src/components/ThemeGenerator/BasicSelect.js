import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
import { ThemeGeneratorContext } from "./ThemeGenerator";

function BasicSelect(props) {
  const [value, setValue] = React.useState(props.defaultValue);
  const [themeProps, setThemeProps, theme, setTheme] = React.useContext(
    ThemeGeneratorContext
  );

  const handleChange = (event) => {
    setValue(event.target.value);
    setThemeProps((oldProps) => {
      return { ...oldProps, [props.themeProp]: event.target.value };
    });
  };

  return (
    <Box sx={{ m: 2, minWidth: "50px" }}>
      <FormControl>
        <InputLabel id={"select-label-" + props.label}>
          {props.label}
        </InputLabel>
        <Select
          labelId={"select-label-" + props.label}
          id={"select-" + props.label}
          value={value}
          label={props.label}
          onChange={handleChange}
          autoWidth={true}
        >
          {props.children}
        </Select>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
export default BasicSelect;