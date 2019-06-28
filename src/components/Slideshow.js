import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const styles = {};

const content = [
  {
    // title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Welding is a fabrication or sculptural process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool causing fusion",
    image: "https://i.imgur.com/ZXBtVw7.jpg"
  },
  {
    // title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Welding is a fabrication or sculptural process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool causing fusion",

    image: "https://i.imgur.com/DCdBXcq.jpg"
  },
  {
    // title: "Phasellus volutpat metus",
    description:
      "Welding is a fabrication or sculptural process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool causing fusion",
    image: "https://i.imgur.com/DvmN8Hx.jpg"
  }
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { classes } = this.props;
    return (
      <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
