import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const NavbarLink = ({icon, text, path}) => {
    const [active, setActive] = useState(false)

    const handleClick = useCallback(() => {
        setActive(!active)
    }, [active, setActive])

    return (
        <Link to={path} onClick={handleClick} className={`${style.container} ${active ? style.containerActive : ''}`}>
            <img className={style.icon} src={icon}/>
            <span className={style.text} >{text}</span>
        </Link>
    )
}

export default NavbarLink