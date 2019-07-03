import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
// import vwiFull from "./media/vwiFul.jpeg";
import vwi_logo from "./media/logo.jpeg";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EventIcon from "@material-ui/icons/Event";
import Gallery from "./components/GalleryPage";
import Contact from "./components/Contact";
import EventPage from "./components/EventPage";
import HomePage from "./components/HomePage";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";
import { Paper } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  appBar: {
    height: 90,
    width: "100vw"
  },
  image: {
    height: 90,
    // width: 275
    cursor: "pointer"
  }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      open: false
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  goToHome = () => {
    this.setState({ value: 0 });
  };

  handleOpen = () => {
    this.setState({ open: false });
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  setContact = () => {
    this.setState({ open: false, value: 3 });
  };

  setGallery = () => {
    this.setState({ open: false, value: 2 });
  };

  setEvents = () => {
    this.setState({ open: false, value: 1 });
  };

  setHome = () => {
    this.setState({ open: false, value: 0 });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Grid>
          <AppBar position="sticky" color="default" className={classes.appBar}>
            <Toolbar variant="dense">
              <img
                src={vwi_logo}
                className={classes.image}
                alt="logo"
                onClick={this.goToHome}
              />
              {/* for mobile */}
              <Hidden mdUp>
                <h5 className="title1">VISHAKA</h5>
                <h5 className="title2">WELDING INSTITUTE</h5>
              </Hidden>

              {/* for desktop */}
              <Hidden smDown>
                <h1 className="title1">VISHAKA</h1>
                <h1 className="title2">WELDING INSTITUTE</h1>
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  centered="true"
                >
                  <Tab label="Home" icon={<HomeIcon />} />
                  <Tab label="Events" icon={<EventIcon />} />
                  <Tab label="Gallery" icon={<FavoriteIcon />} />
                  <Tab label="Contact Us" icon={<PhoneIcon />} />
                </Tabs>
              </Hidden>
              <Hidden mdUp>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="Menu"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  style={{
                    margin: 10,
                    height: 70,
                    width: 70
                  }}
                  onClick={this.handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                  TransitionComponent={Transition}
                >
                  <DialogTitle>
                    <p style={{ color: "#b71c1c" }}>Menu</p>
                  </DialogTitle>
                  <Paper style={{padding:20}}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="flex-start"
                    >
                      <IconButton
                        edge="end"
                        color="inherit"
                        onClick={this.setHome}
                      >
                        <HomeIcon /> Home
                      </IconButton>
                      <IconButton
                        edge="end"
                        color="inherit"
                        onClick={this.setEvents}
                      >
                        <EventIcon /> Events
                      </IconButton>
                      <IconButton
                        edge="end"
                        color="inherit"
                        onClick={this.setGallery}
                      >
                        <FavoriteIcon /> Gallery
                      </IconButton>
                      <IconButton
                        edge="end"
                        color="inherit"
                        onClick={this.setContact}
                      >
                        <PhoneIcon /> Contact Us
                      </IconButton>
                    </Grid>
                  </Paper>
                </Dialog>
              </Hidden>
            </Toolbar>
          </AppBar>
          {value === 0 && <HomePage />}
          {value === 1 && <EventPage />}
          {value === 2 && <Gallery />}
          {value === 3 && <Contact />}
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

// export default App;
