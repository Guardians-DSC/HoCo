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
    const [xPosition, setX] = useState('-20vw')
    const [currentDisplay, setDisplay] = useState(`flex`)
    const [size, setSize] = useState('20rem')
    const [padding, setPadding] = useState(2)
    const [alignRetract, setAlign] = useState('flex-end')
    const [currentOpacity, setOpacity] = useState('1')
    const [rotation, setRotation] = useState('0deg')
    const [shrinked, setShrinked] = useState(false)

    useEffect(() => {
        setX(0)

    })

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleRetract = async () => {
        setOpacity('0')
        setDisplay('none')
        
        const realSize = size === '20rem' ? '5rem' : '20rem'
        setSize(realSize)
        await sleep(400)
        
        const currentRotation = rotation === '0deg' ? '180deg' : '0deg'
        setRotation(currentRotation)
        
        const currentPadding = padding === 2 ? 0 : 2
        setPadding(currentPadding)

        const currentShrinked = shrinked === false ? true : false
        setShrinked(currentShrinked)
        
        const display = currentDisplay === 'flex' ? `none` : 'flex'
        setDisplay(display)
        
        const currentAlign = alignRetract === 'flex-end' ? 'center' : 'flex-end'
        setAlign(currentAlign)
        setOpacity('1')
    }

    return (
        <div 
        className={Style.container}
        style={{padding: `2rem ${padding}rem`, width: size, transform: `translatex(${xPosition})`}}>
            <div className={Style.topHeader}>
                <Retract 
                onClick={handleRetract}
                className={Style.retract}
                style={{'alignSelf': alignRetract, opacity: currentOpacity, transform: `rotate(${rotation})`}}
                />
                <Link to='/'>
                    <HocoLogo 
                    className={Style.logo}
                    style={{display: currentDisplay}}/> 
                </Link>
            </div>

            <div className={Style.linksContainer}>
                <NavbarLink 
                    svgIcon={Hours}
                    text='Minhas Horas'
                    shrinked={shrinked}
                    currentOpacity={currentOpacity}
                    path='/horas'
                    currentPath={window.location.pathname}/>
                <NavbarLink 
                    svgIcon={activitiesIcon} 
                    text='Minhas Atividades'
                    shrinked={shrinked}
                    currentOpacity={currentOpacity}
                    path='/atividades'/>
                <NavbarLink 
                    svgIcon={OrganizationsIcon}
                    text='Organizações'
                    shrinked={shrinked}
                    currentOpacity={currentOpacity}
                    path='/orgs'/>
                <NavbarLink 
                    svgIcon={QuestionsIcon}
                    text='Dúvidas'
                    shrinked={shrinked}
                    selected={true}
                    currentOpacity={currentOpacity}
                    path='/duvidas'/>
            </div>

            <Link to='/perfil' className={Style.profile}>
                <img className={Style.profile_photo}/>
                <p className={Style.name} style={{display: currentDisplay}}>Rodrigo Eloy</p>
            </Link>
            
        </div>
    )
}

export default Sidebar