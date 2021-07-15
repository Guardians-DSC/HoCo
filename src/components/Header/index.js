import React, { useCallback, useState } from 'react'

import { ReactComponent as Burguer } from '../../assets/burg.svg'
import { ReactComponent as LogoIcon } from '../../assets/LogoHoco.svg'
import { ReactComponent as Minilogo } from '../../assets/minilogo.svg'
import Photo from '../../assets/eu.jpeg'

import { Logo } from '../Logo'
import { Profile } from '../Profile'

import style from './style.module.css'
import Sidebar from '../Sidebar'

export const Header = ({props}) => {
    const { handlePathname } = props
    const [isActive, setIsActive] = useState(false)

    const handleActive = useCallback(() => {
        setIsActive(!isActive)
    }, [isActive, setIsActive])

    return (
        <div>
            <div className={`${style.sidebarContainer} ${isActive ? style.active : style.inactive}`}
                 onClick={handleActive}>
                <div className={style.sidebarBackground}>
                    <div className={style.sidebar}>
                        <Sidebar props={{...props, isMobile: true}}/>
                    </div>
                </div>
            </div>
            
            <div className={style.headerContainer} >
                <Burguer className={style.burguer} onClick={handleActive}/>
                <div className={style.logo} onClick={handlePathname}>
                    <Logo Logo={LogoIcon} />
                </div>
                <div className={style.minilogo} >
                    <Logo Logo={Minilogo} />
                </div>
                <div className={style.photo} onClick={handlePathname}>
                    <Profile photo={Photo} />
                </div>
            </div>


        </div>
    )
}