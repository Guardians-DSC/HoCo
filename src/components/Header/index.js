import React from 'react'

import { ReactComponent as Burguer } from '../../assets/burg.svg'
import { ReactComponent as LogoIcon } from '../../assets/LogoHoco.svg'
import { ReactComponent as Minilogo } from '../../assets/minilogo.svg'
import Photo from '../../assets/eu.jpeg'

import { Logo } from '../Logo'
import { Profile } from '../Profile'

import style from './style.module.css'

export const Header = ({handlePathname}) => {
    return (
        <div>
            <div className={style.headerContainer}>
                <Burguer className={style.burguer} />
                <div className={style.logo} onClick={handlePathname}>
                    <Logo Logo={LogoIcon} />
                </div>
                <div className={style.minilogo}>
                    <Logo Logo={Minilogo} />
                </div>
                <div className={style.photo} onClick={handlePathname}>
                    <Profile photo={Photo} />
                </div>
            </div>


        </div>
    )
}