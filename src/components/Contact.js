import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import imgUrl from "../media/giphy.gif";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import AIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./styles.css"

const styles = {
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "auto",
    // overflow: "auto",
    minWidth: "100vw",
    minHeight: "100vh",
    position: "static",
    display: "flex",
    // minHeight: "100vh",
    flexDirection: "column"
  },
  ContactPaper: {
    maxWidth: 400,
    padding: 30,
    margin: 40,
    borderRadius: 25
  },

  footerPaper: {
    margin: 40,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    padding: 20
  }
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      mobile: null,
      message: null,
      submitted: false
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
 

  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="space-between"
      >
        <Paper elevation="25" className={classes.ContactPaper}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
             
            <form
              action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdc9MTjJzgSpSnWHJHnOJYojqssiKNsJvwGBsFmPheSuIYSPQ/formResponse"
              method="POST"
              target="_blank"
             >
              <h1 style={{ color: "#b71c1c" }}>Contact Us</h1>
              <br />
              <hr />
              <TextField
                required
                margin="dense"
                id="full name"
                label="Full Name"
                type="text"
                variant="filled"
                value={this.state.name}
                onChange={this.handleChange("name")}
                name="entry.857089627"
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

              <TextField
                required
                margin="dense"
                id="email"
                label="Email"
                type="text"
                variant="filled"
                // style={{ width: 350, margin: 10 }}
                value={this.state.email}
                name="entry.1087035435"
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

              <TextField
                required
                margin="dense"
                id="mobile"
                label="Mobile"
                type="text"
                variant="filled"
                name="entry.198972150"
                value={this.state.mobile}
                onChange={this.handleChange("mobile")}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                required
                margin="dense"
                id="query"
                label="Message"
                variant="filled"
                multiline
                rows="3"
                name="entry.1447912070"
                value={this.state.message}
                onChange={this.handleChange("message")}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AIcon />
                    </InputAdornment>
                  )
                }}
              />
              <br />
              <Divider variant="inset" />
              <br />
             <Button variant="contained" color="primary" className={classes.button}> <input type="submit" value="Send" /></Button>
            </form>
          </Grid>
        </Paper>

        <Paper elevation="25" className={classes.footerPaper}>
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
              #27-1-245/9, Srinagar, NH_16, Gajuwaka, Vishakapatnam, A.P,
              India 530026
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
