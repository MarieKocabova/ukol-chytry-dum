import React, { useState } from "react";
import "./style.css";

import lightOn from "./img/light-on.svg";
import lightOff from "./img/light-off.svg";

const Light = ({ name, state }) => {
  const [lightState, setLightState] = useState({ state });

  return (
    <div
      className="light"
      onClick={() => {
        setLightState(lightState === "on" ? "off" : "on");
      }}
    >
      <div className="light__icon">
        <img src={lightState === "on" ? lightOn : lightOff} alt={lightState === "on" ? "Rozsvícená žárovka" : "Zhasnutá žárovka"} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
