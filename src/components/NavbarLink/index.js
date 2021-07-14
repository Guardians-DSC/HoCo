import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const NavbarLink = ({icon, text, path, pathname}) => {
    let active = path === pathname
    active = pathname === '/' && path === '/horas' ? active = true : active

    return (
        <Link to={path} className={`${style.container} ${active ? style.containerActive : ''}`}>
            <img className={style.icon} src={icon}/>
            <span className={style.text} >{text}</span>
        </Link>
    )
}

export default NavbarLink