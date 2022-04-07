// import logo from "./logo.svg";
import "./App.css";
import ThemeSwitcherGlobal from "./components/ThemeSwitcherGlobal/ThemeSwitcherGlobal";
import ThemeSwitcherColor from "./components/ThemeSwitcherColor/ThemeSwitcherColor";
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: "2em" }}>
          <ThemeSwitcherGlobal
            themeProfile=""
            disableRipple={false}
            primary=""
            secondary=""
            borderRadius="0"
          >
            <Card uxpId="Card-1" sx={{ maxWidth: 345 }}>
              <CardHeader
                uxpId="Card-Header-1"
                avatar="R"
                color="grey"
                action="add"
                ariaLabel="add"
                title="Design Insights"
                subheader="December 6, 2021"
              />
              <CardMedia
                uxpId="Card-Media-1"
                component="img"
                height={140}
                image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Cool art"
              />
              <CardActionArea uxpId="Card-Action-Area-1">
                <CardContent uxpId="Card-Content-1" component="div">
                  <Typography
                    uxpId="Typograhpy-1"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Trends
                  </Typography>
                  <Typography
                    uxpId="Typography-2"
                    variant="body2"
                    color="text.secondary"
                  >
                    Learn about the recent top design trends and get inspired.
                    See what you can experiment with in your future designs.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions uxpId="Card-Action-1">
                <Button uxpId="Button-1" size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
            <ThemeSwitcherColor themeProfile="dark">
              <Button
                variant="contained"
                themeProfile="hacker"
                borderRadius="10"
              >
                Primärbutton
              </Button>
              <Switch></Switch>
              <Card uxpId="Card-1" sx={{ maxWidth: 345 }}>
                <CardHeader
                  uxpId="Card-Header-1"
                  avatar="R"
                  color="grey"
                  action="add"
                  ariaLabel="add"
                  title="Design Insights"
                  subheader="December 6, 2021"
                />
                <CardMedia
                  uxpId="Card-Media-1"
                  component="img"
                  height={140}
                  image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Cool art"
                />
                <CardActionArea uxpId="Card-Action-Area-1">
                  <CardContent uxpId="Card-Content-1" component="div">
                    <Typography
                      uxpId="Typograhpy-1"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      Trends
                    </Typography>
                    <Typography
                      uxpId="Typography-2"
                      variant="body2"
                      color="text.secondary"
                    >
                      Learn about the recent top design trends and get inspired.
                      See what you can experiment with in your future designs.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions uxpId="Card-Action-1">
                  <Button uxpId="Button-1" size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
              <Accordion uxpId="Accordian-1" expanded={true}>
                <AccordionSummary
                  uxpId="Accordian-Summary-1"
                  expandedIcon="expand_more"
                >
                  <Typography uxpId="Typography-1">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails uxpId="Accordian-Details-1">
                  <Typography uxpId="Typography-1-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ThemeSwitcherColor>
          </ThemeSwitcherGlobal>
        </div>
      </header>
    </div>
  );
}

export default App;
