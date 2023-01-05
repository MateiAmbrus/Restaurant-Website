import React from "react";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer_logo">
        <img src={images.andalu} alt="alt" />
      </div>
      <div className="app__social-media-icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
      <div className="app__footer-navbar-list">
        <ul className="app__footer-links">
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
        </ul>
        <div className="app__footer-company-information">
          <ul className="app__footer-information-list">
            <li className="p__opensans">Nume firma: SC LALOCA13 SRL</li>
            <li className="p__opensans">C.U.I.. RO40171204</li>
            <li className="p__opensans">Registrul comerțului: J22/2131/2018</li>
            <li className="p__opensans">
              Sediu social. Strada Codrescu nr. 6, Iași
            </li>
            <li className="p__opensans">Cont: RO57INGB0000999908570805</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
