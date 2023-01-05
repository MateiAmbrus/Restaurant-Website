import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => (
  <div
    style={{
      color: "white",
      margin: "auto",
      fontFamily: "Trocchi",
      fontWeight: "bold",
      width: "30%",
      textAlign: "center",
    }}
  >
    <p className="p__coremorant">{title}</p>
  </div>
);

export default SubHeading;
