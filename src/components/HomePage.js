import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slideshow from "./Slideshow";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";

const styles = {
  learn: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 25
  },
  learnPage: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: "#b3e5fc",
    padding: 15
  },
  pageHeadText: {
    marginLeft: 25,
    marginTop: 10,
    fontSize: 30,
    fontFamily: "Times New Roman"
  },
  pageText: {
    marginLeft: 30,
    marginTop: 40,
    fontSize: 65,
    fontFamily: "Times New Roman"
  }
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <Paper elevation="15" style={{padding:20, borderRadius: 10, marginTop:10}}>
          <Slideshow />
        </Paper>

        <Paper elevation="15" className={classes.learnPage}>
          <p className={classes.pageHeadText}>We Teach various types of WELDING:</p>
          <Divider variant="inset" />
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
            <Paper elevation="10" className={classes.learn}>
              <p className={classes.pageText}>2G</p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p className={classes.pageText}>3G</p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p className={classes.pageText}>4G</p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p className={classes.pageText}>6G</p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
            <p className={classes.pageText} style={{marginLeft:22, fontSize: 60}}>TIG</p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
            <p className={classes.pageText} style={{marginLeft:20, fontSize: 60}}>ARC</p>    
            </Paper>
            <Paper elevation="10" className={classes.learn}>
            <p className={classes.pageText} style={{marginLeft:20, fontSize: 60}}>MIG</p>  
            </Paper>
            <Paper elevation="10" className={classes.learn}>
            <p className={classes.pageText} style={{marginLeft:25, fontSize: 50, marginTop:20}}>Pipe fitter</p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
            <p className={classes.pageText} style={{marginLeft:25, fontSize: 50, marginTop:20}}>Steel fitter</p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
            <p className={classes.pageText} style={{marginLeft:15, fontSize: 28, marginTop:35}}>Structural fitter</p>
            </Paper>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
