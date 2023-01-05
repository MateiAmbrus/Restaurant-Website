import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Bun venit la" />
      <h1 className="app__header-h1">Domeniile Panciu</h1>
      <p className="p__opensans" style={{ margin: "0 13rem 20px" }}>
        Restaurant spaniol din Copou
      </p>
      <div className="app__header-buttons">
        <button type="button" className="custom__button1">
          Comandă acum
        </button>
        <button type="button" className="custom__button2">
          Inițializează comandă de grup {">"}
        </button>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.mainHeaderImg} alt="mainHeaderImg" />
    </div>
  </div>
);

export default Header;
