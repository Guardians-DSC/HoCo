import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const NavbarLink = ({svgIcon, text, shrinked, currentOpacity, path, currentPath}) => {
    const [currentDisplay, setDisplay] = useState('flex')
    const [containerClass, setClass] = useState('')
    const [isSelected, setSelected] = useState('')

    useEffect(() => {
        const display = shrinked === true ? 'none' : 'flex'
        setDisplay(display)

        const newClass = shrinked === true ? style.shrinkedContainer : style.fullContainer
        setClass(newClass)
    }, [shrinked, setDisplay])
    
    useEffect(() => {
        let selected = currentPath === path ? style.selectedContainer : ''
        selected = currentPath === '/' && path === '/horas'? style.selectedContainer : selected
        
        setSelected(selected)
    }, [currentPath])

    return (
        <Link 
            to={path}
            className={`${style.container} ${containerClass} ${isSelected}`} 
            style={{opacity: currentOpacity}}>
            
            <img src={svgIcon} className={style.icon}/>
            <p className={style.text}
            style={{display: currentDisplay}}>{text}</p>
        </Link>
    )
}

export default NavbarLink