import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import imgUrl from "../media/giphy2.gif";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  card: {
    maxWidth: 800,
    margin: 40,
    padding: 20,
    backgroundColor: "#eeeeee",
    overflow: "auto",
    borderRadius: 25
  },
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "auto",
    width: "100vw",
    height: "100vh",
    position: "static"
  },
  footer: {
    height: 120,
    top: "auto",
    bottom: 0,
    width: "100vw",
    left: 0
  },
  footerText: {
    color: "white"
  }
};

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_array: [
        {
          event_name: "Event Name",
          Description: `Event Description Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate
        numquam dignissimos laborum fugiat deleniti? Eum quasi quidem`,
          event_time: "DD-MM-YYYY Time"
        },
        {
          event_name: "Event Name",
          Description: `Event Description Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem`,
          event_time: "DD-MM-YYYY Time"
        },
        // {
        //   event_name: "Event Name",
        //   Description: `Event Description Lorem ipsum dolor sit amet, consectetur
        //   adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        //   beatae rerum inventore consectetur, neque doloribus, cupiditate
        //   numquam dignissimos laborum fugiat deleniti? Eum quasi quidem`,
        //   event_time: "DD-MM-YYYY Time"
        // },
        // {
        //   event_name: "Event Name",
        //   Description: `Event Description Lorem ipsum dolor sit amet, consectetur
        //   adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        //   beatae rerum inventore consectetur, neque doloribus, cupiditate
        //   numquam dignissimos laborum fugiat deleniti? Eum quasi quidem`,
        //   event_time: "DD-MM-YYYY Time"
        // }
      ]
    };
  }

  render() {
    const { classes } = this.props;
    const { event_array } = this.state;
    return (
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {event_array.map(row => (
          <Card className={classes.card} key={row.id}>
            <CardContent>
              <Typography variant="h6" style={{ color: "#1565c0" }}>
                {row.event_name}
              </Typography>
              <Divider variant="inset" />
              <Typography
                variant="body2"
                style={{ color: "black", marginTop: 20 }}
              >
                {row.Description}
              </Typography>
              <Typography variant="h6" style={{ color: "red", marginTop: 20 }}>
                {row.event_time}
              </Typography>
            </CardContent>
          </Card>
        ))}

        <div>
          <AppBar position="fixed" color="primary" className={classes.footer}>
            <Toolbar>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.footerText}
                  style={{ marginTop: 20 }}
                >
                  Vishaka Welding Institute
                </Typography>
                <Typography
                  variant="overline"
                  gutterBottom
                  className={classes.footerText}
                  style={{ marginTop: -15 }}
                >
                  +91 9704322233, +91 9154165417
                </Typography>
                <Typography
                  variant="overline"
                  gutterBottom
                  className={classes.footerText}
                  style={{ marginTop: -15 }}
                >
                  #27-1-245/9, Srinagar, NH_16, Gajuwaka, Vishakapatnam, A.P,
                  India 530026
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    );
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
