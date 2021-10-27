import React from "react";
import Light from "../Light";
import "./style.css";

const Lights = ({ data }) => (
  <div className="lights">
    {data.lights.map((light, id) => {
      return <Light name={light.name} key={id} />;
    })}
  </div>
);

export default Lights;
