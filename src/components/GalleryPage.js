import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const styles = {
  card: {
    padding: 25,
    height: "400px",
    width: "300px"
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

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Gallery photos={photos} />
      </Grid>
    );
  }
}

GalleryPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GalleryPage);
