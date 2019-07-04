import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import imgUrl from "../media/giphy2.gif";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import CalIcon from "@material-ui/icons/CalendarToday";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  card: {
    maxWidth: 800,
    margin: 40,
    padding: 20,
    backgroundColor: "#fff9c4",
    overflow: "auto"
    // borderRadius: 25
  },
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    // overflow: "auto",
    minWidth: "100vw",
    minHeight: "100vh",
    position: "static",
    display: "flex",
    flexDirection: "column"
  },
  // footer: {
  //   height: 120,
  //   top: "auto",
  //   bottom: 0,
  //   width: "100vw",
  //   left: 0
  // },
  // footerText: {
  //   color: "white"
  // }
  footerPaper: {
    margin: 40,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    padding: 20
  }
};

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events_array: [],
      up_array: []
      // events_array: [
      //   {
      //     EventName: "event1",
      //     Description: "dsds",
      //     EventDate: "March 12, 2019",
      //     EventTime: "ddddd"
      //   },
      //   {
      //     EventName: "event1",
      //     Description: "dsds",
      //     EventDate: "June 2, 2019",
      //     EventTime: "ddddd"
      //   },
      //   {
      //     EventName: "event1",
      //     Description: "dsds",
      //     EventDate: "December 23, 2019",
      //     EventTime: "ddddd"
      //   },
      //   {
      //     EventName: "event1",
      //     Description: "dsds",
      //     EventDate: "December 22, 2019",
      //     EventTime: "ddddd"
      //   }
      // ]
    };
  }

  componentDidMount() {
    fetch("https://sheetdb.io/api/v1/2pc0pbmat9cnb")
      //fetch("")
      .then(res => res.json())
      .then(data => {
        data.sort(function(a, b) {
          var dateA = new Date(a.EventDate),
            dateB = new Date(b.EventDate);
          return dateA - dateB; //sort by date ascending
        });
        this.setState({ up_array: data });
        this.updateArray();
      })
      .catch(console.log);
  }

  updateArray = () => {
    const { events_array, up_array } = this.state;
    var Today = new Date();
    var y = Today.getFullYear();
    var m = Today.getMonth();
    var d = Today.getDate();
    var f_day = new Date(y, m, d, 0, 0, 0, 0);
    console.log(f_day);
    for (var i = 0; i < up_array.length; i++) {
      var e_date = new Date(up_array[i].EventDate);
      if (e_date > Today || e_date.valueOf() === f_day.valueOf()) {
        events_array.push(up_array[i]);
      }
    }
    this.setState({ events_array });
  };

  render() {
    const { classes } = this.props;
    const { events_array } = this.state;
    return (
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="space-between"
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {events_array.length === 0 ? (
            <Card className={classes.card} style={{ padding: 50 }}>
              <h2
                style={{
                  color: "#1565c0",
                  alignContent: "center",
                  marginLeft: 20
                }}
              >
                <CalIcon fontSize="inherit" /> <br />
                No upcoming Events
              </h2>
            </Card>
          ) : (
            events_array.map(row => (
              <Card className={classes.card} key={row.id}>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography variant="h6" style={{ color: "#1565c0" }}>
                      {row.EventName}
                    </Typography>
                    <Divider variant="inset" />
                    <Typography
                      variant="body2"
                      style={{ color: "black", marginTop: 20 }}
                    >
                      {row.Description}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      style={{ color: "red", marginTop: 10 }}
                    >
                      {row.EventDate}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "green", marginTop: 10 }}
                    >
                      {row.EventTime}
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>

        <Paper elevation="25" className={classes.footerPaper}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <h3 style={{ color: "#0d47a1" }}>Vishaka Welding Institute</h3>
              <Typography
                variant="caption"
                gutterBottom
                style={{ color: "#424242", marginLeft: 10 }}
              >
                Estd 2013
              </Typography>
            </Grid>
            <Typography
              variant="overline"
              gutterBottom
              style={{ color: "#b71c1c" }}
            >
              +91 9704322233, +91 9154165417
            </Typography>
            <Typography variant="overline" gutterBottom>
              #27-1-245/9, Srinagar, NH_16, Gajuwaka, Vishakapatnam, A.P, India
              530026
            </Typography>
          </Grid>
        </Paper>

        {/* <div>
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
        </div> */}
      </Grid>
    );
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
