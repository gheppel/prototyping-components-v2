import React from "react";
import PropTypes from "prop-types";
import ThemeProviderHelper from "../../theming/utils/ThemeProviderHelper";
import { useTheme } from "@mui/material/styles";

function ThemeSwitcherFont(props) {
  const currentTheme = useTheme();

  return (
    <ThemeProviderHelper
      {...props}
      currentTheme={currentTheme}
      calledFrom="ThemeSwitcherFont"
    >
      {!props.children ? (
        <span>
          <center>
            <p>Drag components into this wrapper</p>
          </center>
        </span>
      ) : (
        props.children
      )}
    </ThemeProviderHelper>
  );
}
ThemeSwitcherFont.propTypes = {
  /**
   * The label of the button.
   * @uxpinpropname Label
   * */
  children: PropTypes.node,

  /**
   * Changes the font family for all h1 elements
   * @uxpinpropname h1 font family
   */
  h1_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all h1 elements
   * @uxpinpropname h1 font weight
   */
  h1_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all h1 elements
   * @uxpinpropname h1 font size
   */
  h1_fontSize: PropTypes.string,

  /**
   * Changes the line height for all h1 elements
   * @uxpinpropname h1 line height
   */
  h1_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all h1 elements
   * @uxpinpropname h1 letter spacing
   */
  h1_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all h1 elements
   * @uxpinpropname h1 text transform
   */
  h1_textTransform: PropTypes.string,

  /**
   * Changes the font family for all h2 elements
   * @uxpinpropname h2 font family
   */
  h2_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all h2 elements
   * @uxpinpropname h2 font weight
   */
  h2_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all h2 elements
   * @uxpinpropname h2 font size
   */
  h2_fontSize: PropTypes.string,

  /**
   * Changes the line height for all h2 elements
   * @uxpinpropname h2 line height
   */
  h2_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all h2 elements
   * @uxpinpropname h2 letter spacing
   */
  h2_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all h2 elements
   * @uxpinpropname h2 text transform
   */
  h2_textTransform: PropTypes.string,

  /**
   * Changes the font family for all h3 elements
   * @uxpinpropname h3 font family
   */
  h3_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all h3 elements
   * @uxpinpropname h3 font weight
   */
  h3_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all h3 elements
   * @uxpinpropname h3 font size
   */
  h3_fontSize: PropTypes.string,

  /**
   * Changes the line height for all h3 elements
   * @uxpinpropname h3 line height
   */
  h3_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all h3 elements
   * @uxpinpropname h3 letter spacing
   */
  h3_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all h3 elements
   * @uxpinpropname h3 text transform
   */
  h3_textTransform: PropTypes.string,

  /**
   * Changes the font family for all h4 elements
   * @uxpinpropname h4 font family
   */
  h4_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all h4 elements
   * @uxpinpropname h4 font weight
   */
  h4_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all h4 elements
   * @uxpinpropname h4 font size
   */
  h4_fontSize: PropTypes.string,

  /**
   * Changes the line height for all h4 elements
   * @uxpinpropname h4 line height
   */
  h4_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all h4 elements
   * @uxpinpropname h4 letter spacing
   */
  h4_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all h4 elements
   * @uxpinpropname h4 text transform
   */
  h4_textTransform: PropTypes.string,

  /**
   * Changes the font family for all h5 elements
   * @uxpinpropname h5 font family
   */
  h5_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all h5 elements
   * @uxpinpropname h5 font weight
   */
  h5_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all h5 elements
   * @uxpinpropname h5 font size
   */
  h5_fontSize: PropTypes.string,

  /**
   * Changes the line height for all h5 elements
   * @uxpinpropname h5 line height
   */
  h5_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all h5 elements
   * @uxpinpropname h5 letter spacing
   */
  h5_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all h5 elements
   * @uxpinpropname h5 text transform
   */
  h5_textTransform: PropTypes.string,

  /**
   * Changes the font family for all h6 elements
   * @uxpinpropname h6 font family
   */
  h6_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all h6 elements
   * @uxpinpropname h6 font weight
   */
  h6_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all h6 elements
   * @uxpinpropname h6 font size
   */
  h6_fontSize: PropTypes.string,

  /**
   * Changes the line height for all h6 elements
   * @uxpinpropname h6 line height
   */
  h6_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all h6 elements
   * @uxpinpropname h6 letter spacing
   */
  h6_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all h6 elements
   * @uxpinpropname h6 text transform
   */
  h6_textTransform: PropTypes.string,

  /**
   * Changes the font family for all subtitle1 elements
   * @uxpinpropname subtitle1 font family
   */
  subtitle1_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all subtitle1 elements
   * @uxpinpropname subtitle1 font weight
   */
  subtitle1_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all subtitle1 elements
   * @uxpinpropname subtitle1 font size
   */
  subtitle1_fontSize: PropTypes.string,

  /**
   * Changes the line height for all subtitle1 elements
   * @uxpinpropname subtitle1 line height
   */
  subtitle1_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all subtitle1 elements
   * @uxpinpropname subtitle1 letter spacing
   */
  subtitle1_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all subtitle1 elements
   * @uxpinpropname subtitle1 text transform
   */
  subtitle1_textTransform: PropTypes.string,

  /**
   * Changes the font family for all subtitle2 elements
   * @uxpinpropname subtitle2 font family
   */
  subtitle2_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all subtitle2 elements
   * @uxpinpropname subtitle2 font weight
   */
  subtitle2_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all subtitle2 elements
   * @uxpinpropname subtitle2 font size
   */
  subtitle2_fontSize: PropTypes.string,

  /**
   * Changes the line height for all subtitle2 elements
   * @uxpinpropname subtitle2 line height
   */
  subtitle2_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all subtitle2 elements
   * @uxpinpropname subtitle2 letter spacing
   */
  subtitle2_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all subtitle2 elements
   * @uxpinpropname subtitle2 text transform
   */
  subtitle2_textTransform: PropTypes.string,

  /**
   * Changes the font family for all body1 elements
   * @uxpinpropname body1 font family
   */
  body1_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all body1 elements
   * @uxpinpropname body1 font weight
   */
  body1_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all body1 elements
   * @uxpinpropname body1 font size
   */
  body1_fontSize: PropTypes.string,

  /**
   * Changes the line height for all body1 elements
   * @uxpinpropname body1 line height
   */
  body1_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all body1 elements
   * @uxpinpropname body1 letter spacing
   */
  body1_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all body1 elements
   * @uxpinpropname body1 text transform
   */
  body1_textTransform: PropTypes.string,

  /**
   * Changes the font family for all body2 elements
   * @uxpinpropname body2 font family
   */
  body2_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all body2 elements
   * @uxpinpropname body2 font weight
   */
  body2_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all body2 elements
   * @uxpinpropname body2 font size
   */
  body2_fontSize: PropTypes.string,

  /**
   * Changes the line height for all body2 elements
   * @uxpinpropname body2 line height
   */
  body2_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all body2 elements
   * @uxpinpropname body2 letter spacing
   */
  body2_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all body2 elements
   * @uxpinpropname body2 text transform
   */
  body2_textTransform: PropTypes.string,

  /**
   * Changes the font family for all button elements
   * @uxpinpropname button font family
   */
  button_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all button elements
   * @uxpinpropname button font weight
   */
  button_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all button elements
   * @uxpinpropname button font size
   */
  button_fontSize: PropTypes.string,

  /**
   * Changes the line height for all button elements
   * @uxpinpropname button line height
   */
  button_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all button elements
   * @uxpinpropname button letter spacing
   */
  button_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all button elements
   * @uxpinpropname button text transform
   */
  button_textTransform: PropTypes.string,

  /**
   * Changes the font family for all caption elements
   * @uxpinpropname caption font family
   */
  caption_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all caption elements
   * @uxpinpropname caption font weight
   */
  caption_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all caption elements
   * @uxpinpropname caption font size
   */
  caption_fontSize: PropTypes.string,

  /**
   * Changes the line height for all caption elements
   * @uxpinpropname caption line height
   */
  caption_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all caption elements
   * @uxpinpropname caption letter spacing
   */
  caption_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all caption elements
   * @uxpinpropname caption text transform
   */
  caption_textTransform: PropTypes.string,

  /**
   * Changes the font family for all overline elements
   * @uxpinpropname overline font family
   */
  overline_fontFamily: PropTypes.string,

  /**
   * Changes the font weight for all overline elements
   * @uxpinpropname overline font weight
   */
  overline_fontWeight: PropTypes.string,

  /**
   * Changes the font size for all overline elements
   * @uxpinpropname overline font size
   */
  overline_fontSize: PropTypes.string,

  /**
   * Changes the line height for all overline elements
   * @uxpinpropname overline line height
   */
  overline_lineHeight: PropTypes.string,

  /**
   * Changes the letter spacing for all overline elements
   * @uxpinpropname overline letter spacing
   */
  overline_letterSpacing: PropTypes.string,

  /**
   * Changes the text transform for all overline elements
   * @uxpinpropname overline text transform
   */
  overline_textTransform: PropTypes.string,
};
export default ThemeSwitcherFont;
