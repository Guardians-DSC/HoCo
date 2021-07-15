import React, { useState, useCallback } from 'react'

import { ReactComponent as Retract } from '../../assets/retract.svg'
import { ReactComponent as HocoLogo } from '../../assets/LogoHoco.svg'
import Photo from '../../assets/eu.jpeg'

import NavbarLink from '../NavbarLink'
import { Profile } from '../Profile'
import { Logo } from '../Logo'

import style from './style.module.css'

const Sidebar = ({ props }) => {
    const {pages, pathname, handlePathname} = props

    const [retracted, setRetracted] = useState(false)
    const [currentOpacity, setOpacity] = useState('1')

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleRetract = useCallback(async () => {
        setRetracted(!retracted)
        setOpacity('0')
        await sleep(400)
        setOpacity('1')
    }, [retracted, setRetracted])

    return (
        <div>
            <div className={`${style.outContainer} ${retracted ? style.outContainerRetracted : ''}`}>
                <div className={`${style.container} ${retracted ? style.containerRetracted : style.fullContainer}`}>
                    <div className={style.topHeader} onClick={handlePathname}>
                        <Retract
                            onClick={handleRetract}
                            className={`${style.retract}`}
                            style={{ opacity: currentOpacity }} />
                        <div className={style.logo}>
                            <Logo Logo={HocoLogo} />
                        </div>
                    </div>

                    <ul className={style.links}>
                        {pages.map((page) => {
                            return (
                                <li key={page.name} onClick={handlePathname}>
                                    <NavbarLink text={page.text} icon={page.icon} path={page.path} pathname={pathname} retracted={retracted} />
                                </li>
                            )
                        })}
                    </ul>

                    <div className={style.profile} onClick={handlePathname}>
                        <Profile photo={Photo} name='Rodrigo Eloy' retracted={retracted} />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Sidebar