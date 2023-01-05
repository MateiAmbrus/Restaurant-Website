import React from "react";
import { images } from "../../constants";
import { useState } from "react";

import "./Rezervari.css";

const Rezervari = () => {
  const [persoane, setPersoane] = useState(null);
  const [ora, setOra] = useState(null);
  const [data, setData] = useState(null);
  return (
    <div className="app__booking_img">
      <div className="app__booking">
        <h2>Rezerva o masa</h2>
        <div className="nume_prenume">
          <label className="">Nume</label>
          <input type="text" />
          <label>Prenume</label>
          <input type="text" />
        </div>
        <div className="telefon_email">
          <label>Telefon</label>
          <input type="text" />
          <label>E-mail</label>
          <input type="text" />
        </div>
        <div className="nrPers_ora_data">
          <label>Nr. de persoane</label>
          <select
            value={persoane}
            onChange={(e) => setPersoane(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <label>Ora</label>
          <select value={ora} onChange={(e) => setOra(e.target.value)}>
            <option>12:00</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
            <option>15:00</option>
            <option>15:30</option>
            <option>16:00</option>
            <option>16:30</option>
            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
          </select>
          <label>Data</label>
          <select value={data} onChange={(e) => setData(e.target.value)}>
            <option>1/1</option>
            <option>3/1</option>
            <option>4/1</option>
            <option>5/1</option>
            <option>6/1</option>
            <option>7/1</option>
            <option>8/1</option>
            <option>10/1</option>
            <option>11/1</option>
            <option>12/1</option>
            <option>13/1</option>
            <option>14/1</option>
            <option>15/1</option>
            <option>17/1</option>
            <option>18/1</option>
            <option>19/1</option>
            <option>20/1</option>
            <option>21/1</option>
            <option>22/1</option>
            <option>24/1</option>
            <option>25/1</option>
            <option>26/1</option>
            <option>27/1</option>
            <option>28/1</option>
            <option>29/1</option>
            <option>31/1</option>
          </select>
        </div>
        <div className="locatia_mesei">
          <label>Locatia mesei</label>
          <input type="text" />
        </div>
        <div className="cerinte_suplimentare">
          <label style={{ display: "block" }}>Cerinte suplimentare</label>
          <div className="buton_text">
            <input type="checkbox" />
            <p style={{ display: "inline" }}>
              Vreau să primesc mesaje promoționale din partea Andalu
            </p>
          </div>
        </div>
        <div className="butoane_1_2">
          <button className="booking_btn1">Rezerva masa</button>
          <button className="booking_btn2">Rezerva & comanda in avans</button>
        </div>
      </div>
      <div className="app__img">
        <img src={images.tabelImg} />
      </div>
    </div>
  );
};

export default Rezervari;
