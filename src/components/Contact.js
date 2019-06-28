import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import imgUrl from "../media/giphy.gif";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  card: {
    width: 400,
    height: 620,
    margin: 50,
    padding: 25,
    overflow: "auto"
  },
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "auto",
    width: "100vw",
    height: "100vh",
    position: "static",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  footer: {
    height: 120,
    top: "auto",
    bottom: 0,
    width: "100vw",
    left: 0,

  },
  footerText: {
    color: "white"
  },
};



class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      mobile: null,
      message: null
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}  container>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h4" style={{ color: "#b71c1c" }}>
                Contact Us
              </Typography>
              <br />
              <Divider />
              <br />
              <TextField
                required
                margin="dense"
                id="full name"
                label="Full Name"
                type="text"
                variant="filled"
                style={{ width: 350, margin: 10 }}
                value={this.state.name}
                onChange={this.handleChange("name")}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <br />
              <TextField
                required
                margin="dense"
                id="email"
                label="Email"
                type="text"
                variant="filled"
                style={{ width: 350, margin: 10 }}
                value={this.state.email}
                onChange={this.handleChange("email")}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageIcon />
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <br />
              <TextField
                required
                margin="dense"
                id="mobile"
                label="Mobile"
                type="text"
                variant="filled"
                style={{ width: 350, margin: 10 }}
                value={this.state.mobile}
                onChange={this.handleChange("mobile")}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                      +91
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <br />
              <TextField
                required
                margin="dense"
                id="query"
                label="Message"
                variant="filled"
                multiline
                rows="4"
                style={{ width: 350, margin: 10 }}
                value={this.state.message}
                onChange={this.handleChange("message")}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={this.sendMsg}
                style={{ width: 350, margin: 20, marginTop:0 }}
              >
                Send Message
              </Button>
            </CardActions>
          </Card>
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

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
