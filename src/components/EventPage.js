import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import imgUrl from "../media/giphy2.gif";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: "40vw",
    height: "10vw",
    margin: 50,
    padding: 25,
    backgroundColor: "#eeeeee",
    overflow: "auto"
  },
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "auto",
    width: "100vw",
    height: "100vh",
    position: "static"
  }
};


class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_array : [
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
        }
      ],
    };
  }


  render() {
    const { classes } = this.props;
    const { event_array } = this.state;
    return (
      <Grid
        className={classes.root}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
        
        {event_array.map(row => (
          <Card className={classes.card} key={row.id}>
            <CardContent>
              <Typography variant="h6" style={{ color: "#1565c0" }}>
                {row.event_name}
              </Typography>
              <Typography variant="body2" style={{ color: "black" }}>
                {row.Description}
              </Typography>
              <Typography variant="h6" style={{ color: "red" }}>
                {row.event_time}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    );
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
