import React from "react";
import { images } from "../../constants";
import "./Echipa.css";

const Echipa = () => (
  <div className="app__echipa_section">
    <div className="app__echipa_text">
      <h1>Echipa</h1>
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
    <div className="app__echipa-img">
      <img src={images.chefImg3} alt="echipa img" />
    </div>
  </div>
);

export default Echipa;
