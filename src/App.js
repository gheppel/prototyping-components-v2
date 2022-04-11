// import logo from "./logo.svg";
import "./App.css";
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: "2em" }}>
          <UXPinWrapper>
            <ThemeCustomizer themeProfile="" />
            <ThemeSwitcherGeneral
              themeProfile=""
              disableRipple={false}
              primary=""
              secondary=""
              borderRadius="4"
              mode=""
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
              <ThemeSwitcherColor
                themeProfile=""
                primary_contrastText=""
                mode="light"
                text_primary=""
              >
                <ThemeSwitcherFont fontSize="" h4_letterSpacing="2em">
                  <Button variant="contained" size="large">
                    Primähhhhhhhhrböttän
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
                          Learn about the recent top design trends and get
                          inspired. See what you can experiment with in your
                          future designs.
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
                  <Box uxpId="box1">
                    <Typography uxpId="box2" variant="h3">
                      Your ideas
                    </Typography>
                  </Box>
                  <Breadcrumbs aria-label="breadcrumb" uxpId="breadcrumb-1">
                    <Link
                      uxpId="link-1"
                      underline="hover"
                      color="inherit"
                      href="/"
                    >
                      Files
                    </Link>
                    <Link
                      uxpId="link-2"
                      underline="hover"
                      color="inherit"
                      href="/getting-started/installation/"
                    >
                      Documents
                    </Link>
                    <Typography uxpId="link-3" color="text.secondary">
                      Analysis
                    </Typography>
                  </Breadcrumbs>
                </ThemeSwitcherFont>
              </ThemeSwitcherColor>
            </ThemeSwitcherGeneral>
          </UXPinWrapper>
        </div>
      </header>
    </div>
  );
}

export default App;
