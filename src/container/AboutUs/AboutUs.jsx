import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__about-us_section">
    <div className="app__about-us_text">
      <h1>Despre Noi</h1>
      <h3>
        Lorem ipsum dolor sit amet, conseetetur adipisicing elit, sed do eiusmod
        tempor
      </h3>
      <p>
        Lorem ipsum dolor sit amet, conseetetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ul aliquip ex
      </p>
    </div>
    <div className="app__about-us-img">
      <img src={images.aboutUsImg} alt="restaurant img" />
    </div>
  </div>
);

export default AboutUs;
