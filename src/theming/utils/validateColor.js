//checks if given color is a hex or rgba
export default function validateColor(color) {
  if (color && color !== "") {
    //not empty or undefined

    //hex
    if (color.includes("#")) {
      //includes #

      if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/gi.test(color)) {
        return true;
      } else {
        console.log("no valid hex");
        return false;
      }
    }

    //rgb or rgba
    if (color.includes("rgb")) {
      if (
        /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/.test(
          color
        )
      ) {
        return true;
      } else {
        //neither hex nor rgba
        console.log("no valid rgb(a)");
        return false;
      }
    }

    console.log("neither hex nor rgba");
    return false;
  } else {
    //empty or undefined
    console.log("empty or undefined");
    return false;
  }
}
