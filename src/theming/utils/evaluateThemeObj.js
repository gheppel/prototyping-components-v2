//checks a given obj
//returns parsed obj if it passed the checks
//updates the state with the given method otherwise and returns false
export default function evaluateThemeObj(value) {
  const themeKeys = [
    "palette",
    "typography",
    "breakpoints",
    "direction",
    "components",
    "shape",
    "mixins",
    "shadows",
    "zIndex",
  ];

  try {
    let parsedObj = JSON.parse(JSON.stringify(value));
    //is JSON

    if (typeof parsedObj === "string") {
      // try to parse again

      try {
        parsedObj = JSON.parse(parsedObj);
        //worked

        if (typeof parsedObj === "object") {
          //is an object

          if (
            Object.keys(parsedObj).some((key) =>
              themeKeys.some((themeKey) => {
                return key === themeKey;
              })
            )
          ) {
            //seems to be a MUI theme
            return {
              passed: true,
              message: "Paste a MUI theme object here, if you have one already",
              theme: parsedObj,
            };
          } else {
            //no mui theme keys
            return {
              passed: false,
              message:
                "This seems to be no mui theme, please check your theme object!",
            };
          }
        } else {
          //still no obj
          return {
            passed: false,
            message: "This is no valid JSON, please check your theme object!",
          };
        }
      } catch (error) {
        //still no obj
        return {
          passed: false,
          message: "This is no valid JSON, please check your theme object!",
        };
      }
    }
    if (typeof parsedObj === "object") {
      //is an object

      if (
        Object.keys(parsedObj).some((key) =>
          themeKeys.some((themeKey) => {
            return key === themeKey;
          })
        )
      ) {
        //seems to be a MUI theme
        return {
          passed: true,
          message: "Paste a MUI theme object here, if you have one already",
          theme: parsedObj,
        };
      } else {
        //no mui theme keys
        return {
          passed: false,
          message:
            "This seems to be no mui theme, please check your theme object!",
        };
      }
    } else {
      return {
        passed: false,
        message:
          "This is no valid JSON object, please check your theme object!",
      };
    }
  } catch (error) {
    //is no JSON
    return {
      passed: false,
      message: "This is no valid JSON, please check your theme object!",
    };
  }
}
