import React, { useState } from "react";
import "./style.css";

import blindsOpen from "./img/blinds-open.svg";
import blindsClosed from "./img/blinds-closed.svg";

const Blinds = ({ blinds }) => {
  const [blindsControl, setBlindsControl] = useState({ blinds });

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blindsControl === "open" ? blindsOpen : blindsClosed} alt={blindsControl === "open" ? "Otevřené žaluzie" : "Zavřené žaluzie"} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={blindsControl === "open" ? "button button--active" : "button"}
          onClick={() => {
            setBlindsControl("open");
          }}
        >
          Otevřeno
        </button>
        <button
          className={blindsControl === "close" ? "button button--active" : "button"}
          onClick={() => {
            setBlindsControl("close");
          }}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
