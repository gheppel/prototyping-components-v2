// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { useTheme } from "@mui/styles";
import ThemeSwitcherGeneral from "./components/ThemeSwitcherGeneral/ThemeSwitcherGeneral";
import ThemeSwitcherColor from "./components/ThemeSwitcherColor/ThemeSwitcherColor";
import ThemeSwitcherFont from "./components/ThemeSwitcherFont/ThemeSwitcherFont";
import ThemeCustomizer from "./components/ThemeCustomizer/ThemeCustomizer";
import Card from "./components/Card/Card";
import CardActions from "./components/CardActions/CardActions";
import CardActionArea from "./components/CardActionArea/CardActionArea";
import CardContent from "./components/CardContent/CardContent";
import CardHeader from "./components/CardHeader/CardHeader";
import CardMedia from "./components/CardMedia/CardMedia";
import Button from "./components/Button/Button";
import Avatar from "./components/Avatar/Avatar";
import Icon from "./components/Icon/Icon";
import IconButton from "./components/IconButton/IconButton";
import Typography from "./components/Typography/Typography";
import Accordion from "./components/Accordion/Accordion";
import AccordionDetails from "./components/AccordionDetails/AccordionDetails";
import AccordionSummary from "./components/AccordionSummary/AccordionSummary";
import Switch from "./components/Switch/Switch";
import Box from "./components/Box/Box";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Link from "./components/Link/Link";
import UXPinWrapper from "./components/UXPinWrapper/UXPinWrapper";
import Paper from "./components/Paper/Paper";
import Grid from "./components/Grid/Grid";
import Alert from "./components/Alert/Alert";
import AlertTitle from "./components/AlertTitle/AlertTitle";
import ThemeGenerator from "./components/ThemeGenerator/ThemeGenerator";

function App() {
  return (
    <div className="App">
      <UXPinWrapper>
        <Box sx={{ height: "100vh", width: "100vw" }}>
          {" "}
          <ThemeGenerator />
        </Box>
      </UXPinWrapper>
    </div>
  );
}

export default App;
