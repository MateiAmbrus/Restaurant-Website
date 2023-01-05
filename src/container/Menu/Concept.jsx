import React from "react";
import { images } from "../../constants";

import "./Concept.css";

const Concept = () => (
  <div className="app__concept_section">
    <div className="app__concept-img">
      <img src={images.conceptImg} alt="concept img" />
    </div>
    <div className="app__concept_text">
      <h1>Concept</h1>
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
  </div>
);

export default Concept;
