import React from "react";
import { useState } from "react";
import { images } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./MenuItems.css";

const MenuItem = () => {
  const [qty1, setQty1] = useState(0);
  const [qty2, setQty2] = useState(0);
  const [qty3, setQty3] = useState(0);
  const [qty4, setQty4] = useState(0);
  const minusCount1 = () => {
    return setQty1((prevState) => prevState - 1);
  };
  const plusCount1 = () => {
    return setQty1((prevState) => prevState + 1);
  };
  const minusCount2 = () => {
    return setQty2((prevState) => prevState - 1);
  };
  const plusCount2 = () => {
    return setQty2((prevState) => prevState + 1);
  };
  const minusCount3 = () => {
    return setQty3((prevState) => prevState - 1);
  };
  const plusCount3 = () => {
    return setQty3((prevState) => prevState + 1);
  };
  const minusCount4 = () => {
    return setQty4((prevState) => prevState - 1);
  };
  const plusCount4 = () => {
    return setQty4((prevState) => prevState + 1);
  };
  return (
    <div className="menu__section">
      <div className="menu__promotions_salads">
        <h1>Promotii</h1>
        <div className="menu__promotions">
          <div className="item1">
            <img
              src={images.spanishDesert}
              className="item1_img"
              alt="item1_img"
            />
            <div className="item1_text">
              <h3>40%</h3>
              <p>reducere la orice desert</p>
              <button className="comanda__btn1" onClick={() => setQty1(1)}>
                Comanda acum
              </button>
            </div>
          </div>
          <div className="item2">
            <img src={images.paellaImg} className="item2_img" alt="item2_img" />
            <div className="item2_text">
              <h3>35%</h3>
              <p>reducere la orice fel principal</p>
              <button className="comanda__btn2" onClick={() => setQty2(1)}>
                Comanda acum
              </button>
            </div>
          </div>
        </div>
        <h1>Salate</h1>
        <div className="menu__salads">
          <div className="item3">
            <img src={images.saladImg1} className="item3_img" alt="item3_img" />
            <div className="item3_text">
              <h3>Creveți în sos din ulei de măsline.</h3>
              <p>
                <span>29 lei</span> 300g GF,LF
              </p>
              <p>
                Creveți proaspeți, decorați, pregătiți în sos de ulei de măsline
              </p>
              <button className="comanda__btn3" onClick={() => setQty3(1)}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="item4">
            <img src={images.saladImg3} className="item4_img" alt="item4_img" />
            <div className="item4_text">
              <h3>Creveți în sos din ulei de măsline.</h3>
              <p>
                <span>29 lei</span> 300g GF,LF
              </p>
              <p>
                Creveți proaspeți, decorați, pregătiți în sos de ulei de măsline
              </p>
              <button className="comanda__btn4" onClick={() => setQty4(1)}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__orders">
        <h2>Comanda Ta</h2>
        {qty1 >= 1 && (
          <div id="item1">
            Paella cu fructe de mare
            <button id="minus1" onClick={minusCount1}>
              -
            </button>
            <span id="qty1">{qty1}</span>
            <button id="plus1" onClick={plusCount1}>
              +
            </button>
            <span id="total1">{qty1 * 30}</span>
            lei
          </div>
        )}
        {qty2 >= 1 && (
          <div id="item2">
            Paella cu fructe de mare
            <button id="minus2" onClick={minusCount2}>
              -
            </button>
            <span id="qty2">{qty2}</span>
            <button id="plus2" onClick={plusCount2}>
              +
            </button>
            <span id="total2">{qty2 * 30}</span>
            lei
          </div>
        )}
        {qty3 >= 1 && (
          <div id="item3">
            <div className="item3_text_order">
              Creveți în sos din ulei de măsline
            </div>
            <div style={{ display: "inline-block" }}>
              <button id="minus3" onClick={minusCount3}>
                -
              </button>
              <span id="qty3">{qty3}</span>
              <button id="plus3" onClick={plusCount3}>
                +
              </button>
              <span id="total3">{qty3 * 29}</span>
              lei
            </div>
          </div>
        )}
        {qty4 >= 1 && (
          <div id="item4">
            <div className="item4_text_order">
              Creveți în sos de roșii picant
            </div>
            <div style={{ display: "inline-block" }}>
              <button id="minus4" onClick={minusCount4}>
                -
              </button>
              <span id="qty4">{qty4}</span>
              <button id="plus4" onClick={plusCount4}>
                +
              </button>
              <span id="total4">{qty4 * 29}</span>
              lei
            </div>
          </div>
        )}
        <input type="checkbox" />
        <span className="span1">Doresc tacâmuri</span>
        <p>
          Introdu cod promoțional {"("}opțional{")"}
        </p>
        <p>
          <span className="span2">Cod promoțional</span>
          <input type="checkbox" />
        </p>
        <p>
          <span id="subtotal_text">Subtotal</span>
          <span id="subtotal">
            {qty1 * 30 + qty2 * 30 + qty3 * 29 + qty4 * 29}
          </span>
        </p>
        <p>
          <span id="reducere_text">Reducere</span>
          <span id="reducere">0</span>
        </p>
        <p>
          <span id="total_text">Total</span>
          <span id="total">
            {qty1 * 30 + qty2 * 30 + qty3 * 29 + qty4 * 29}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
