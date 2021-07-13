import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Horas from './views/Horas'
import Atividades from './views/Atividades'
import Organizacoes from './views/Organizacoes'
import Duvidas from './views/Duvidas'
import Perfil from './views/Perfil'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Horas}/>
      <Route path='/horas' component={Horas}/>
      <Route path='/atividades' component={Atividades}/>
      <Route path='/orgs' component={Organizacoes}/>
      <Route path='/duvidas' component={Duvidas}/>
      <Route path='/perfil' component={Perfil}/>
      <Route path='*'><Redirect to='/'/></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
