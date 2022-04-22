export const getAllColors = (theme) => {
  let colors = [];
  //does not yet account for special palette objects like action, text or background
  Object.keys(theme.palette).forEach((key) => {
    if (typeof theme.palette[key] === "object") {
      colors.push(key);
    }
  });
  return colors;
};

export const getMainColors = (theme) => {
  let colors = [];
  Object.keys(theme.palette).forEach((key) => {
    if (
      ![
        "mode",
        "divider",
        "background",
        "common",
        "text",
        "grey",
        "contrastThreshold",
        "getContrastText",
        "augmentColor",
        "tonalOffset",
        "action",
      ].includes(key)
    ) {
      colors.push(key);
    }
  });
  return colors;
};
