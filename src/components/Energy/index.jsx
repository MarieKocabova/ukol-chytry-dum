import React from "react";
import "./style.css";

import imgElectricity from "./img/electricity.svg";
import imgWater from "./img/water.svg";

const Energy = ({ electricity, water }) => (
  <div className="energy">
    <div className="energy__source">
      <div className="energy__icon">
        <img src={imgElectricity} alt="Elektřina, ikona" />
      </div>
      <div className="energy__consumption">
        <div className="energy__description">Elektřina</div>
        <div className="energy__value">{electricity} kW</div>
      </div>
    </div>
    <div className="energy__source">
      <div className="energy__icon">
        <img src={imgWater} alt="Kapka vody, ikona" />
      </div>
      <div className="energy__consumption">
        <div className="energy__description">Voda</div>
        <div className="energy__value">
          {water} m<sup>3</sup>
        </div>
      </div>
    </div>
  </div>
);

export default Energy;
