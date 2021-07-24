import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

const NavbarLink = ({ page, pathname, retracted }) => {
  const { icon, text, path } = page;
  const active = path === pathname || (pathname === "/" && path === "/horas");

  return (
    <Link
      to={path}
      className={`${style.container}
                                    ${active ? style.containerActive : ""}
                                    ${retracted ? style.retracted : ""}`}
    >
      <img className={style.icon} src={icon} alt="" />
      <span className={style.text}>{text}</span>
    </Link>
  );
};

export default NavbarLink;
