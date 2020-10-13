import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={4000}
      bullets={false}
      fillParent={false}
    >
      <div data-src={require("./images/1.jpg")} />
      <div data-src={require("./images/2.jpg")} />
      <div data-src={require("./images/3.jpg")} />
      <div data-src={require("./images/4.jpg")} />
      <div data-src={require("./images/5.jpg")} />
      <div data-src={require("./images/6.jpg")} />
    </AutoplaySlider>
  );
};

export default Slider;
