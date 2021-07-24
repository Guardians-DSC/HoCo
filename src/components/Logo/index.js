import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

export const Logo = ({ Logo, alt }) => {
  return (
    <Link to="/horas" className={style.container}>
      <Logo className={style.logo} alt={alt} />
    </Link>
  );
};
