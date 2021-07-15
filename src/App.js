import React, {useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import OrganizationsIcon from './assets/organizations.svg'
import activitiesIcon from './assets/activities.svg'
import QuestionsIcon from './assets/questions.svg'
import Hours from './assets/hours.svg'

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
    const [pathname, setPathname] = useState(window.location.pathname)


    const pages = [
        { name: 'horas', text: 'Minhas Horas', icon: Hours, path: '/horas' },
        { name: 'atividades', text: 'Minhas Atividades', icon: activitiesIcon, path: '/atividades' },
        { name: 'orgs', text: 'Organizações', icon: OrganizationsIcon, path: '/orgs' },
        { name: 'duvidas', text: 'Dúvidas', icon: QuestionsIcon, path: '/duvidas' },
    ]
    
    const handlePathname = useCallback(() => {
        setPathname(window.location.pathname)
    }, [setPathname])

    useEffect(() => {
        window.addEventListener('resize', () => {
            const ismobile = window.innerWidth < 1250
            if (ismobile !== isMobile) {
                setIsMobile(ismobile)
            }
        }, false)
    }, [isMobile])

    const props = { pages, pathname, handlePathname, isMobile }
    return (
        <div className={`app`}>
            <BrowserRouter>
                { isMobile ? <Header props={props}/> : <Sidebar props={props}/> }
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
