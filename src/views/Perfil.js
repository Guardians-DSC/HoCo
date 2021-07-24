import React from "react";
import { ReactComponent as Profile } from "../assets/darkProfile.svg";

function Perfil() {
  return (
    <div>
      <div className="title">
        <Profile className="icon" />
        <h1>perfil</h1>
      </div>
    </div>
  );
}

export default Perfil;
