import React, { useState } from "react";
import "./style.css";

import tepm from "./img/temp.svg";

const Climate = ({ temp, humidity }) => {
  const [degree, setDegree] = useState(temp);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={tepm} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{degree}&deg;C</div>
        <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
      </div>
      <div className="climate__controls">
        <button
          className="button"
          onClick={() => {
            setDegree((degree) => degree + 1);
            console.log(degree);
          }}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => {
            setDegree((degree) => degree - 1);
            console.log(degree);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;
