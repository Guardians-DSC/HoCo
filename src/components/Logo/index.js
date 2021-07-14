import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as HocoLogo} from '../../assets/LogoHoco.svg'
import style from './style.module.css'

export const Logo = () => {
    return (
        <Link to='/horas' className={style.container}>
            <HocoLogo className={style.logo} />
        </Link>
    )
}