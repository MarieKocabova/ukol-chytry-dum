import React from "react";
import "./style.css";

import blindsOpen from "./img/blinds-open.svg";
import blindsClosed from "./img/blinds-closed.svg";

const Blinds = () => (
  <div className="blinds">
    <div className="blinds__icon">
      <img src={blindsOpen} />
    </div>
    <div className="blinds__name">Žaluzie</div>
    <div className="blinds__controls">
      <button className="button button--active">Otevřeno</button>
      <button className="button">Zavřeno</button>
    </div>
  </div>
);

export default Blinds;
