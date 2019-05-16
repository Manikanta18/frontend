import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import vwi_logo from './media/logo.jpeg'
import vwiFull from "./media/vwiFul.jpeg";
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite';
// import Loading from "./Loading";

const styles = {
  root: {
    flexGrow: 1,
    minWidth:500
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 10,
    height: 70,
    width: 70
  },
  appBar: {
    height: 90,
    minWidth: 400
  },
  image: {
    height: 90,
    width: 275,
  }
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
        <AppBar position="static" color="default" className={classes.appBar}>
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
            <Tab label="Home" icon={<HomeIcon />}/>
            <Tab label="Gallery" icon={<FavoriteIcon />}/>
            <Tab label="Alumni" icon={<PersonPinIcon />}/>
            <Tab label="Contact Us" icon={<PhoneIcon />}  />
          </Tabs>
          </Toolbar>


        </AppBar>
        {/* {value === 0 && <Loading />}
        {value === 1 && <Loading />}
        {value === 2 && <Loading />} */}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
