import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import vwiFull from "./media/vwiFul.jpeg";
import PhoneIcon from "@material-ui/icons/Phone";
// import PersonPinIcon from "@material-ui/icons/PersonPin";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EventIcon from '@material-ui/icons/Event'
import Loading from "./Loading";
import Gallery from "./components/GalleryPage"
import Contact from "./components/Contact";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1,
    minWidth: 500
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 10,
    height: 70,
    width: 70
  },
  appBar: {
    height: 90,
    width: "100vw"
  },
  image: {
    height: 90,
    width: 275
  },
  
};

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

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Grid>
          <AppBar position="sticky" color="default" className={classes.appBar}>
            <Toolbar variant="dense">
              <img className={classes.image} src={vwiFull} alt="vwi" />
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
            </Toolbar>
          </AppBar>
          {value === 0 && <Loading />}
          {value === 1 && <Loading />}
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
