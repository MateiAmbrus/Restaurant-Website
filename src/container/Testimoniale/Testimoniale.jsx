import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimoniale.css";
import { useState } from "react";

const Testimoniale = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="app__section_text_form" id="contact">
      <div className="app__section_text">
        <h1>Testimoniale</h1>
        <p>
          Lorem ipsum dolor sit amet, conseetetur adipisicing elit, sed do
          eiusmod tempor Lorem ipsum dolor sit amet, conseetetur adipisicing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, conseetetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ul aliquip ex
        </p>
        <div className="Stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <h3>Georgescu Valentin</h3>
      </div>
      <div className="app__section_form">
        <form className="app__form">
          <h2>Lasa-ne o recenzie</h2>
          <label>Nume</label>
          <input type="text" />
          <label>Subiect</label>
          <input type="text" />
          <label>Mesaj</label>
          <textarea></textarea>
          <label id="slecialLabel">Da-ne o nota</label>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label style={{ display: "inline" }}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  style={{ display: "none" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  color={
                    ratingValue <= (hover || rating)
                      ? "#ff6633"
                      : "rgb(162, 162, 162)"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}

          <input type="submit" value="Trimite" id="submitBtn" />
        </form>
      </div>
    </div>
  );
};

export default Testimoniale;
