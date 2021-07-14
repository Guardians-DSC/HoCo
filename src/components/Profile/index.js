import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

export const Profile = ({photo, name, retracted}) => {
    return (
        <Link to='/perfil' className={`${style.container} ${retracted ? style.retracted : ''}`}>
            <img src={photo} className={style.photo}/>
            <span className={style.name}>{name}</span>
        </Link>
    )
}