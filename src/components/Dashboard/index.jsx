import React from "react";
import "./style.css";

import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";

const Dashboard = ({ data }) => (
  <main className="dashboard">
    <Lights data={data} />
    <Climate temp={data.climate.temperature} humidity={data.climate.humidity} />
    <Blinds blinds={data.blinds} />
    <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
  </main>
);

export default Dashboard;
