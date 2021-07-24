import React, { createContext, useContext, useState, useCallback } from 'react'

import OrganizationsIcon from '../assets/organizations.svg'
import Minilogo from '../assets/minilogo.svg'
import activitiesIcon from '../assets/activities.svg'
import QuestionsIcon from '../assets/questions.svg'
import Hours from '../assets/hours.svg'

import Horas from '../views/Horas'
import Atividades from '../views/Atividades'
import Organizacoes from '../views/Organizacoes'
import Duvidas from '../views/Duvidas'
import Perfil from '../views/Perfil'
import { Sobre } from '../views/Sobre'

const PagesContext = createContext()

export function PagesProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname)
  const pages = [
    {
      name: 'horas',
      text: 'Minhas Horas',
      icon: Hours,
      path: '/horas',
      component: Horas,
      sidebar: true,
    },
    {
      name: 'atividades',
      text: 'Minhas Atividades',
      icon: activitiesIcon,
      path: '/atividades',
      component: Atividades,
      sidebar: true,
    },
    {
      name: 'orgs',
      text: 'Organizações',
      icon: OrganizationsIcon,
      path: '/orgs',
      component: Organizacoes,
      sidebar: true,
    },
    {
      name: 'duvidas',
      text: 'Dúvidas',
      icon: QuestionsIcon,
      path: '/duvidas',
      component: Duvidas,
      sidebar: true,
    },
    {
      name: 'sobre',
      text: 'O HoCo',
      icon: Minilogo,
      path: '/sobre',
      component: Sobre,
      sidebar: true,
    },
    {
      name: 'Perfil',
      text: 'Meu Perfil',
      icon: Minilogo,
      path: '/perfil',
      component: Perfil,
    },
  ]

  const handlePathname = useCallback(() => {
    setPathname(window.location.pathname)
  }, [setPathname])

  const values = {
    pathname,
    setPathname,
    pages,
    handlePathname,
  }

  return (
    <PagesContext.Provider value={values}>{children}</PagesContext.Provider>
  )
}

export default function usePagesContext() {
  const context = useContext(PagesContext)

  return { ...context }
}
