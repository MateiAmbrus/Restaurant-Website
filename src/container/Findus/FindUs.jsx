import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./FindUs.css";

const FindUs = () => (
  <div className="app__section_contact_map" id="contact">
    <div className="app_section_map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.837825279164!2d27.569020415839056!3d47.18061172530027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafca1c0ebc0df%3A0x15560d12f2c84603!2sStrada%20Codrescu%206%2C%20Ia%C8%99i%20700481!5e0!3m2!1sro!2sro!4v1672443852904!5m2!1sro!2sro"
        title="map"
        width="100%"
        height="600"
        border="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="app__section_contact">
      <div className="app__contact">
        <h2>Contact</h2>
        <ul>
          <li>
            <span>A</span>: Strada Codrescu nr.6, Iași
          </li>
          <li>
            <span>T</span>: 0740977316
          </li>
          <li>
            <span>E</span>: andalugastrobar@gmail.com
          </li>
        </ul>
        <div className="app__social-media-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__porgram">
        <h3>Program</h3>
        <ul>
          <li>
            Luni: <span>Inchis</span>
          </li>
          <li>
            Marti - Duminica: <span>12:00-21:30</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FindUs;
