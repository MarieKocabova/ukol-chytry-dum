import React from "react";
import "./style.css";

import lightOn from "./img/light-on.svg";
import lightOff from "./img/light-off.svg";

const Light = () => (
  <div className="light">
    <div className="light__icon">
      <img src={lightOff} />
    </div>
    <div className="light__name">Obývací pokoj</div>
  </div>
);

export default Light;
