import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const NavbarLink = ({icon, text, path, pathname}) => {

    return (
        <Link to={path} className={`${style.container} ${path === pathname ? style.containerActive : ''}`}>
            <img className={style.icon} src={icon}/>
            <span className={style.text} >{text}</span>
        </Link>
    )
}

export default NavbarLink