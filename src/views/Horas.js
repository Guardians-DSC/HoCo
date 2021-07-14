import React from 'react'
import {ReactComponent as Clock} from '../assets/darkClock.svg'
import appStyle from '../styles/app.module.css'

function Horas() {
  return (
    <div className={appStyle.title}>
      <Clock className={appStyle.icon}/>
      <h1>minhas horas</h1>
    </div>
  );
}

export default Horas
