import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

export const Logo = ({Logo}) => {
    return (
        <Link to='/horas' className={style.container}>
            <Logo className={style.logo} />
        </Link>
    )
}