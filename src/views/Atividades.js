import React from 'react'
import {ReactComponent as Book} from '../assets/darkBook.svg'
import appStyle from '../styles/app.module.css'


function Atividades() {
  return (
    <div className={appStyle.title}>
      <Book className={appStyle.icon}/>
      <h1>minhas atividades</h1>
    </div>
  );
}

export default Atividades
