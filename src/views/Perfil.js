import React from 'react'
import {ReactComponent as Profile} from '../assets/darkProfile.svg'
import appStyle from '../styles/app.module.css'

function Perfil() {
  return (
    <div className={appStyle.title}>
      <Profile className={appStyle.icon}/>
      <h1>perfil</h1>
    </div>
  );
}

export default Perfil
