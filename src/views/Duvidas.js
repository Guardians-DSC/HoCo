import React from 'react'
import {ReactComponent as Question} from '../assets/darkQuestion.svg'
import appStyle from '../styles/app.module.css'

function Duvidas() {
  return (
    <div className={appStyle.title}>
      <Question className={appStyle.icon}/>
      <h1>dúvidas frequentes</h1>
    </div>
  );
}

export default Duvidas
