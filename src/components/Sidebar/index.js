import React, { useState, useCallback } from 'react'
import {ReactComponent as Retract} from '../../assets/retract.svg'
import Hours from '../../assets/hours.svg'
import OrganizationsIcon from '../../assets/organizations.svg'
import QuestionsIcon from '../../assets/questions.svg'
import activitiesIcon from '../../assets/activities.svg'
import NavbarLink from '../NavbarLink'
import style from './style.module.css'
import { Logo } from '../Logo'

const Sidebar = ({active}) => {
    const [pathname, setPathname] = useState(window.location.pathname)
    const [retracted, setRetracted] = useState(false)
    const [currentOpacity, setOpacity] = useState('1')
    const pages = [
        {name: 'horas', text: 'Minhas Horas', icon: Hours, path: '/horas'},
        {name: 'atividades', text: 'Minhas Atividades', icon: activitiesIcon, path: '/atividades'},
        {name: 'orgs', text: 'Organizações', icon: OrganizationsIcon, path: '/orgs'},
        {name: 'duvidas', text: 'Minhas Horas', icon: QuestionsIcon, path: '/duvidas'},
    ]
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handlePathname = useCallback(() => {
        setPathname(window.location.pathname)
    }, [setPathname])

    const handleRetract = useCallback(async () => {
        setRetracted(!retracted)
        setOpacity('0')
        await sleep(400)
        setOpacity('1')
    }, [retracted, setRetracted])



    return (
        <div className={`${style.container} ${retracted ? style.containerRetracted : style.fullContainer}`}>
            <div className={style.topHeader} onClick={handlePathname}>
                <Retract
                    onClick={handleRetract}
                    className={`${style.retract}`}
                    style={{opacity: currentOpacity}}/>
                <div className={style.logo}><Logo/></div>
            </div>

            <ul className={style.links}>
                {pages.map((page) => {
                    return (
                        <li id={page.name} onClick={handlePathname}>
                            <NavbarLink text={page.text} icon={page.icon} path={page.path} pathname={pathname} retracted={retracted}/>
                        </li>
                    )
                })}
            </ul>

            <div>

            </div>
        </div>
    )
}

export default Sidebar