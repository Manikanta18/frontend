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
import "./styles.css";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const styles = {
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: null,
      message: "",
      submitted: false,
      open2: false,
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleOpen2 = () => {
    const { name, email, mobile, message } = this.state;
    if (name === "" || email === "" || mobile === 0 || message === "" || mobile === null) {
    } else {
      this.setState({ open2: true });
    }
  };

  handleClose2 = () => {
    this.setState({
      open2: false,
      name: "",
      mobile: "",
      message: "",
      email: ""
    });
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
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSdu6RFFKQvG8DN26OjBuUaOOcYXVaCdbRh9I2JESBFBH5yIAA/formResponse"
            method="POST"
            target="_blank"
          >
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <h1 style={{ color: "#b71c1c" }}>Contact Us</h1>

              <Divider variant="inset" />
              <br />
              <TextField
                required
                margin="dense"
                id="full name"
                label="Full Name"
                type="text"
                variant="filled"
                value={this.state.name}
                onChange={this.handleChange("name")}
                name="entry.1883312648"
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
                type="email"
                variant="filled"
                // style={{ width: 350, margin: 10 }}
                value={this.state.email}
                name="entry.1922758020"
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
                type="number"
                variant="filled"
                name="entry.1600189061"
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
                name="entry.1614997605"
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
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleOpen2}
              >
                <input type="submit" value="Send" />
              </Button>
              <Dialog
                open={this.state.open2}
                onClose={this.handleClose2}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                TransitionComponent={Transition}
                minWidth="sm"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"Contact Us"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    {"Thanks for your Message..!"}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose2} color="primary">
                    close
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </form>
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
              #27-1-245/9, Srinagar, NH_16, Gajuwaka, Vishakapatnam, A.P, India
              530026
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
