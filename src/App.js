import React, {useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Horas from './views/Horas'
import Atividades from './views/Atividades'
import Organizacoes from './views/Organizacoes'
import Duvidas from './views/Duvidas'
import Perfil from './views/Perfil'
import Sidebar from './components/Sidebar'
import { Header }from './components/Header'
import './styles/reset.css'
import './styles/root.css'
import './styles/app.css'

export const App = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1250)

    useEffect(() => {
        window.addEventListener('resize', () => {
            const ismobile = window.innerWidth < 1250
            if (ismobile !== isMobile) {
                setIsMobile(ismobile)
            }
        }, false)
    }, [isMobile])

    return (
        <div className={`app`}>
            <BrowserRouter>
                {isMobile ? <Header/> : <Sidebar/>}
                <div className={`${isMobile ? 'mobile-body' : 'body'}`}>
                    <Switch>
                        <Route path='/' exact component={Horas} />
                        <Route path='/horas' component={Horas} />
                        <Route path='/atividades' component={Atividades} />
                        <Route path='/orgs' component={Organizacoes} />
                        <Route path='/duvidas' component={Duvidas} />
                        <Route path='/perfil' component={Perfil} />
                        <Route path='*'><Redirect to='/' /></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}
