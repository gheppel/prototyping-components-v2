import React from "react";
import PropTypes from "prop-types";
import ButtonM from "@mui/material/Button";
import Icon from "../Icon/Icon";
import { iconVariants } from "../Icon/icon-variants";
import ThemeProviderLocal from "../../theming/utils/ThemeProviderLocal";
import { themeProfiles } from "../../theming/utils/themeCustomization";

/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 */
function Button(props) {
  const { uxpinRef, ...other } = props;

  return (
    <ThemeProviderLocal {...props} themeProfile={props.themeProfile}>
      <ButtonM
        {...other}
        ref={uxpinRef}
        startIcon={props.startIcon && <Icon>{props.startIcon}</Icon>}
        endIcon={props.endIcon && <Icon>{props.endIcon}</Icon>}

        //sx={{ backgroundColor: theme.palette.primary.main }}
      >
        {props.children}
      </ButtonM>
    </ThemeProviderLocal>
  );
}

Button.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * The color theme specific to this component.
   */
  themeProfile: PropTypes.oneOf(["light", "dark", "hacker"]),

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button will be disabled.
   */
  randomProp: PropTypes.bool,

  /**
   * If `true`, the button will have no elevation.
   */
  disableElevation: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),

  /**
   * The HREF of the button.
   */
  href: PropTypes.string,

  /**
   * If set, icon will display to the left.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  startIcon: PropTypes.oneOf(iconVariants),

  /**
   * If set, icon will display to the right.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  endIcon: PropTypes.oneOf(iconVariants),

  /**
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Button;
