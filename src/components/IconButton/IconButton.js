import React from "react";
import PropTypes from "prop-types";
import IconButtonM from "@mui/material/IconButton";
import Icon from "../Icon/Icon";
import { iconVariants } from "../Icon/icon-variants";
import { useTheme } from "@mui/styles";
import { getMainColors } from "../../theming/utils/getThemeVariables";
import { ThemeContext } from "../UXPinWrapper/UXPinWrapper";
/**
 * @uxpindocurl https://mui.com/api/icon-button/#main-content
 */
let colors = [];
function IconButton(props) {
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);
  console.log(themeOptions.theme);
  let theme = useTheme();
  colors = getMainColors(themeOptions.theme);
  console.log(colors);

  IconButton.propTypes = {
    /**
     * The icon element.
     * @uxpinpropname  Icon
     */
    children: PropTypes.oneOf(iconVariants),

    /**
     * The size of the button.
     * `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * If given, uses a negative margin to counteract the padding on one
     * side (this is often helpful for aligning the left or right
     * side of the icon with content above or below, without ruining the border
     * size and shape).
     */
    edge: PropTypes.oneOf(["start", "end", false]),

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(["default", "inherit", ...colors]),

    /**
     * Aria tag for accessibility
     */
    ariaLabel: PropTypes.string,

    /**
     * If `true`, the button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If `true`, the ripple will be disabled.
     */
    disableRipple: PropTypes.bool,

    onClick: PropTypes.func,

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.object,
  };
  return (
    <IconButtonM {...props}>
      <Icon fontSize={props.size}>{props.children}</Icon>
    </IconButtonM>
  );
}
export default IconButton;
