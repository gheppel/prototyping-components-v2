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
  const [, setThemeProps, theme, , reset, pickers, setPickers] =
    React.useContext(ThemeGeneratorContext);
  // const [pickrInitialized, setPickrInitialized] = React.useState(false);
  const [value, setValue] = React.useState("");
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
    // console.log(event.target.value);
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

  // function initPicker() {
  //   const picker = Pickr.create({
  //     el: "#" + props.themeProp + "_input",
  //     container: "#actualSettingsPanel",
  //     useAsButton: true,
  //     theme: "classic",
  //     swatches: [
  //       theme.palette.primary.main,
  //       theme.palette.secondary.main,
  //       theme.palette.success.main,
  //       theme.palette.info.main,
  //       theme.palette.error.main,
  //       theme.palette.warning.main,
  //     ],
  //     showAlways: false,
  //     closeOnScroll: true,
  //     position: "top-start",
  //     default: props.defaultValue,
  //     components: {
  //       preview: true,
  //       opacity: true,
  //       hue: true,
  //       interaction: {
  //         hex: false,
  //         rgba: false,
  //         hsla: false,
  //         hsva: false,
  //         cmyk: false,
  //         input: true,
  //         clear: true,
  //         save: true,
  //       },
  //     },
  //   })
  //     .on("init", (instance) => {
  //       console.log("pickr initialized");
  //     })
  //     .on("save", (color, instance) => {
  //       // console.log(color.toHEXA().toString());
  //       handleChange(color.toHEXA().toString());
  //       instance.hide();
  //     });
  //   setPickers((other) => {
  //     return { ...other, [props.themeProp]: picker };
  //   });
  // }
  // let pickers = {};
  // const addPicker = (key, instance) => {
  //   pickers[key] = instance;
  // };
  // const removePicker = (key) => {
  //   delete removePicker[key];
  // };

  React.useEffect(() => {
    if (reset) {
      setValue("");
    }
  }, [reset, props.themeAcessor]);

  // const pickr =
  //   props.type === "color"
  //     ? Pickr.create({
  //         el: "#" + props.themeProp + "_input",
  //         container: "#actualSettingsPanel",
  //         useAsButton: true,
  //         theme: "monolith",
  //         swatches: [
  //           theme.palette.primary.main,
  //           theme.palette.secondary.main,
  //           theme.palette.success.main,
  //           theme.palette.info.main,
  //           theme.palette.error.main,
  //           theme.palette.warning.main,
  //         ],
  //         showAlways: false,
  //         closeOnScroll: true,
  //         position: "top-start",
  //         default: props.defaultValue,
  //         components: {
  //           preview: true,
  //           opacity: true,
  //           hue: true,
  //           interaction: {
  //             hex: false,
  //             rgba: false,
  //             hsla: false,
  //             hsva: false,
  //             cmyk: false,
  //             input: true,
  //             clear: true,
  //             save: true,
  //           },
  //         },
  //       })
  //         .on("init", () => {
  //           console.log("pickr initialized");
  //           setPickrInitialized(true);
  //         })
  //         .on("save", (color, instance) => {
  //           // console.log(color.toHEXA().toString());
  //           handleChange(color.toHEXA().toString());
  //           pickr.hide();
  //         })
  //     : undefined;

  // React.useEffect(() => {
  //   //init color picker
  //   if (!initialized) {
  //     initialize(true);

  //     if (props.type === "color") {
  //       if (pickers[props.themeProp] === undefined) {
  //         initPicker();
  //       } else {
  //         let picker = pickers[props.themeProp];
  //         console.log(picker);
  //         picker.destroyAndRemove();
  //         initPicker();
  //       }
  //     }
  //   }
  //   // return () => {
  //   //   console.log("clean up for " + props.themeProp);
  //   // };
  // }, [initialized]);
  // React.useEffect(() => {
  //   return () => {
  //     console.log("color pickers will be cleaned up");
  //     console.log();
  //     // pickr.current.destroyAndRemove();
  //   };
  // });
  return (
    <Box
      component="form"
      sx={{ my: 2, ml: 2, width: props.width }}
      autoComplete="off"
      noValidate
    >
      <TextField
        id={props.themeProp + "_input"}
        // class={props.type === "color" ? "color-pickerable" : ""}
        label={props.label}
        variant="outlined"
        helperText={stateProps.helperText}
        value={value}
        onChange={handleChange}
        placeholder={"default: " + props.defaultValue}
        error={stateProps.error}
        onkeydown="return event.key != 'Enter';"
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
