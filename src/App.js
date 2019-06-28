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
// import Menu from "./components/Menu";
// import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  root: {
    flexGrow: 1
  },
  appBar: {
    height: 90,
    width: "100vw"
  },
  image: {
    height: 90
    // width: 275
  }
};

// const menu_values = [
//   {
//     value: 0,
//     label: "Home"
//   },
//   {
//     value: 1,
//     label: "Events"
//   },
//   {
//     value: 2,
//     label: "Gallery"
//   },
//   {
//     value: 3,
//     label: "Contact"
//   }
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChange1 = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Grid>
          <AppBar position="sticky" color="default" className={classes.appBar}>
            <Toolbar variant="dense">
              {/* <TextField
                id="menu"
                select
                label="Menu"
                className={classes.textField}
                value={menu_values.value}
                onChange={this.handleChange1}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
                variant="filled"
              >
                {menu_values.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> */}

              <img
                src={vwi_logo}
                className={classes.image}
                alt="logo"
                onClick={this.goToHome}
              />
              <Hidden mdUp>
                <h5 className="title1">VISHAKA</h5>
                <h5 className="title2">WELDING INSTITUTE</h5>
              </Hidden>
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
