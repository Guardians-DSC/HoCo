import React, { useState, useEffect } from 'react'
import {ReactComponent as HocoLogo} from '../../assets/LogoHoco.svg'
import {ReactComponent as Retract} from '../../assets/retract.svg'
import Hours from '../../assets/hours.svg'
import OrganizationsIcon from '../../assets/organizations.svg'
import QuestionsIcon from '../../assets/questions.svg'
import activitiesIcon from '../../assets/activities.svg'
import NavbarLink from '../NavbarLink'
import { Link } from 'react-router-dom'
import Style from './style.module.css'

const Sidebar = ({active}) => {
    const pages = [
        {name: 'horas', text: 'Minhas Horas', icon: Hours, path: '/horas'},
        {name: 'atividades', text: 'Minhas Atividades', icon: activitiesIcon, path: '/atividades'},
        {name: 'orgs', text: 'Organizações', icon: OrganizationsIcon, path: '/orgs'},
        {name: 'duvidas', text: 'Minhas Horas', icon: QuestionsIcon, path: '/duvidas'},
    ]


    return (
        <div>
            <div>

            </div>
            <ul>
                {pages.map((page) => {
                    return (
                        <li id={page.name}>
                            <NavbarLink text={page.text} icon={page.icon} path={page.path}/>
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