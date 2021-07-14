import React from 'react'
import {ReactComponent as Orgs} from '../assets/darkOrgs.svg'
import appStyle from '../styles/app.module.css'

function Organizacoes() {
  return (
    <div className={appStyle.title}>
      <Orgs className={appStyle.icon}/>
      <h1>organizações</h1>
    </div>
  );
}

export default Organizacoes
