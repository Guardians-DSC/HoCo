import React from "react";
import { ReactComponent as Clock } from "../assets/darkClock.svg";

function Horas() {
  return (
    <div className="title">
      <Clock className="icon" />
      <h1>minhas horas</h1>
    </div>
  );
}

export default Horas;
