import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Settings from "./Settings";
import Colors from "./Colors";
import Fonts from "./Fonts";
import { ThemeGeneratorContext } from "./ThemeGenerator";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [width, setWidth] = React.useState("0px");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [, , theme, , ,] = React.useContext(ThemeGeneratorContext);
  React.useEffect(() => {
    let resizeObserver;
    if (!resizeObserver) {
      const resize_ob = new ResizeObserver(function (entries) {
        let panel = entries[0].contentRect;
        setWidth(panel.width + "px");
      });
      resize_ob.observe(document.querySelector("#settingsPanel"));
    }
  });

  return (
    <Box sx={{ maxWidth: "100%", mt: "49px" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          position: "fixed",
          top: "96px",
          width: width,
          backgroundColor: theme.palette.background.paper,
          zIndex: 9000,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Settings" {...a11yProps(0)} />
          <Tab label="Colors" {...a11yProps(1)} />
          <Tab label="Fonts" {...a11yProps(2)} />
          <Tab label="Spacing" {...a11yProps(3)} />
          <Tab label="Components" {...a11yProps(4)} />
          <Tab label="Transitions" {...a11yProps(5)} />
          <Tab label="Shadows" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <Box sx={{ mt: 4, width: width }} id="actualSettingsPanel">
        <TabPanel value={value} index={0}>
          <Settings></Settings>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Colors></Colors>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Fonts></Fonts>
        </TabPanel>
      </Box>
    </Box>
  );
}
