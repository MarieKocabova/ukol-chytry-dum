import React from "react";
import "./style.css";

import lightOn from "./img/light-on.svg";
import lightOff from "./img/light-off.svg";

const Light = ({ name }) => (
  <div className="light">
    <div className="light__icon">
      <img src={lightOff} />
    </div>
    <div className="light__name">{name}</div>
  </div>
);

export default Light;
