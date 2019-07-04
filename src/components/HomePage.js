import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slideshow from "./Slideshow";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import people1 from "../media/people/img_avatar.png";
import siva_img from "../media/people/siva.jpeg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CalIcon from "@material-ui/icons/CalendarToday";

const styles = {
  learn: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 25
  },
  learnPage: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    backgroundColor: "#b3e5fc",
    padding: 15
  },

  peoplePage: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    backgroundColor: "#a5d6a7",
    padding: 15
  },

  peopleCard: {
    padding: 15,
    margin: 20,
    borderRadius: 15,
    width: 200,
    height: 200
  },

  pageHeadText: {
    marginLeft: 25,
    marginTop: 10,
    fontSize: 18,
    fontFamily: "Times New Roman"
  },
  pageText: {
    marginLeft: 25,
    marginTop: 35,
    fontSize: 35,
    fontFamily: "Times New Roman"
  },
  eventPage: {
    margin: 40,
    backgroundColor: "#fff9c4",
    padding: 20,
    borderRadius: 15
  },
  eventCard: {
    margin: 20,
    borderRadius: 15,
    padding: 20
  },
  footerPaper: {
    margin: 40,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    padding: 20
  }
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_array: [],
      up_array: []
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
    const { event_array, up_array } = this.state;
    var Today = new Date();
    var y = Today.getFullYear();
    var m = Today.getMonth();
    var d = Today.getDate();
    var f_day = new Date(y, m, d, 0, 0, 0, 0);
    console.log(f_day);
    for (var i = 0; i < up_array.length; i++) {
      var e_date = new Date(up_array[i].EventDate);
      if (e_date.valueOf() === f_day.valueOf()) {
        event_array.push(up_array[i]);
      }
    }
    this.setState({ event_array });
  };

  render() {
    const { classes } = this.props;
    const { event_array } = this.state;
    return (
      <Grid>
        <Paper
          elevation="15"
          style={{ padding: 20, borderRadius: 10, margin: 10 }}
        >
          <Slideshow />
        </Paper>

        <Paper elevation="15" className={classes.learnPage}>
          <p className={classes.pageHeadText}>
            We Teach various types of WELDING:
          </p>
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
              <p
                className={classes.pageText}
                style={{ marginLeft: 22, fontSize: 30 }}
              >
                TIG
              </p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p
                className={classes.pageText}
                style={{ marginLeft: 20, fontSize: 30 }}
              >
                ARC
              </p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p
                className={classes.pageText}
                style={{ marginLeft: 20, fontSize: 30 }}
              >
                MIG
              </p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p
                className={classes.pageText}
                style={{ marginLeft: 25, fontSize: 25, marginTop: 20 }}
              >
                Pipe fitter
              </p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p
                className={classes.pageText}
                style={{ marginLeft: 25, fontSize: 25, marginTop: 20 }}
              >
                Steel fitter
              </p>
            </Paper>
            <Paper elevation="10" className={classes.learn}>
              <p
                className={classes.pageText}
                style={{ marginLeft: 10, fontSize: 18, marginTop: 30 }}
              >
                Structural fitter
              </p>
            </Paper>
          </Grid>
        </Paper>

        <Paper elevation="15" className={classes.eventPage}>
          <p className={classes.pageHeadText}>Latest Upcoming Event:</p>
          <Divider variant="inset" />
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
            <Card elevation="15" className={classes.eventCard}>
              {event_array.length !== 0 ? (
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography variant="h6" style={{ color: "#1565c0" }}>
                      {event_array[0].EventName}
                    </Typography>
                    <Divider variant="inset" />
                    <Typography
                      variant="body2"
                      style={{ color: "black", marginTop: 20 }}
                    >
                      {event_array[0].Description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "red", marginTop: 10 }}
                    >
                      {event_array[0].EventDate}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "green", marginTop: 10 }}
                    >
                      {event_array[0].EventTime}
                    </Typography>
                  </Grid>

                  <Divider variant="middle" />
                  <Typography
                    variant="caption"
                    style={{ color: "black", marginTop: 20 }}
                  >
                    *For more upcoming events, visit Events tab
                  </Typography>
                </CardContent>
              ) : (
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
              )}
            </Card>
          </Grid>
        </Paper>

        <Paper elevation="15" className={classes.peoplePage}>
          <p className={classes.pageHeadText}>People:</p>
          <Divider variant="inset" />
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
            <Card
              elevation="15"
              className={classes.peopleCard}
              style={{ backgroundColor: "#f9fbe7" }}
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img
                  style={{ borderRadius: "50%", width: 100, height: 100 }}
                  alt="people"
                  src={siva_img}
                />

                <p style={{ color: "#b71c1c", fontSize: 18 }}>Owner</p>
                <p style={{ color: "#0d47a1", fontSize: 22 }}>B. SIVA KUMAR</p>
              </Grid>
            </Card>
            <Card elevation="15" className={classes.peopleCard}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img
                  style={{ borderRadius: "50%", width: 100, height: 100 }}
                  alt="people"
                  src={people1}
                />

                <p style={{ color: "#b71c1c", fontSize: 18 }}>Instructor</p>
                <p style={{ color: "#0d47a1", fontSize: 22 }}>NAME</p>
              </Grid>
            </Card>
            <Card elevation="15" className={classes.peopleCard}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img
                  style={{ borderRadius: "50%", width: 100, height: 100 }}
                  alt="people"
                  src={people1}
                />

                <p style={{ color: "#b71c1c", fontSize: 18 }}>Instructor</p>
                <p style={{ color: "#0d47a1", fontSize: 22 }}>NAME</p>
              </Grid>
            </Card>
            <Card elevation="15" className={classes.peopleCard}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <img
                  style={{ borderRadius: "50%", width: 100, height: 100 }}
                  alt="people"
                  src={people1}
                />

                <p style={{ color: "#b71c1c", fontSize: 18 }}>Instructor</p>
                <p style={{ color: "#0d47a1", fontSize: 22 }}>NAME</p>
              </Grid>
            </Card>
          </Grid>
        </Paper>

        <Paper elevation="10" className={classes.footerPaper}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h3 style={{ color: "#0d47a1" }}>Vishaka Welding Institute</h3>
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
      </Grid>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
