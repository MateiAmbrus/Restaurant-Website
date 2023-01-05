import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [language, setLanguage] = useState("");
  return (
    <nav className="app__navbar">
      <div className="app__navbar__logo">
        <img src={images.andalu} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#comanda">Comanda</a>
        </li>
        <li className="p__opensans">
          <a href="#rezervari">Rezervari</a>
        </li>
        <li className="p__opensans">
          <a href="#despre-noi">Despre noi</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
        <li className="p__opensans">
          <a href="#user">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <div />
        <a href="#comenzi" className="p__opensans">
          <FontAwesomeIcon icon={faBagShopping} />
        </a>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>RO</option>
          <option>EN</option>
          <option>FR</option>
        </select>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#comanda">Comanda</a>
              </li>
              <li className="p__opensans">
                <a href="#rezervari">Rezervari</a>
              </li>
              <li className="p__opensans">
                <a href="#despre-noi">Despre noi</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
              <li className="p__opensans">
                <a href="#user">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
