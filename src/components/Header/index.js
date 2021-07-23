import React, { useCallback, useState } from 'react'

import { ReactComponent as Burguer } from '../../assets/burg.svg'
import { ReactComponent as LogoIcon } from '../../assets/LogoHoco.svg'
import usePagesContext from '../../contexts/app.context'

import { Logo } from '../Logo'
import { Profile } from '../Profile'
import Sidebar from '../Sidebar'

import style from './style.module.css'

export const Header = ({ props }) => {
    const { handlePathname } = usePagesContext()
    const [ isActive, setIsActive ] = useState(false)

    const handleActive = useCallback(() => {
        setIsActive(!isActive)
    }, [isActive, setIsActive])

    return (
        <div >
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
                    <Logo
                        Logo={LogoIcon}
                        alt='Logo grande do hoco onde está escrito HoCo com o H e o C maiúsculos'/>
                </div>
                <div className={style.photo} onClick={handlePathname}>
                    <Profile retracted/>
                </div>
            </div>
        </div>
    )
}
