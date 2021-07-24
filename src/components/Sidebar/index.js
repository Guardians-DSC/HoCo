import React, { useState, useCallback } from 'react'

import { ReactComponent as Retract } from '../../assets/retract.svg'
import { ReactComponent as Close } from '../../assets/x.svg'
import { ReactComponent as HocoLogo } from '../../assets/LogoHoco.svg'

import NavbarLink from '../NavbarLink'
import { Profile } from '../Profile'
import { Logo } from '../Logo'

import { sleep } from '../../util/util'

import usePagesContext from '../../contexts/app.context'
import useResize from '../../contexts/resize.context'

import style from './style.module.css'

const Sidebar = () => {
  const { pages, pathname, handlePathname } = usePagesContext()
  const { isMobile } = useResize()

  const [retracted, setRetracted] = useState(false)
  const [currentOpacity, setOpacity] = useState('1')

  const handleRetract = useCallback(async () => {
    setRetracted(!retracted)
    setOpacity('0')
    await sleep(400)
    setOpacity('1')
  }, [retracted, setRetracted])

  return (
    <div>
      <div
        className={`${isMobile ? style.mobileContainer : style.outContainer}
                             ${retracted ? style.outContainerRetracted : ''}`}
      >
        <div
          className={`${style.container}
                                 ${
                                   retracted
                                     ? style.containerRetracted
                                     : style.fullContainer
                                 }`}
        >
          <div className={style.topHeader} onClick={handlePathname}>
            {isMobile ? (
              <Close className={`${style.retract}`} />
            ) : (
              <Retract
                onClick={handleRetract}
                className={`${style.retract}`}
                style={{ opacity: currentOpacity }}
              />
            )}
            <div className={style.logo}>
              <Logo Logo={HocoLogo} />
            </div>
          </div>

          <ul className={style.links}>
            {pages.map((page) => {
              if (page.sidebar) {
                return (
                  <li key={page.name} onClick={handlePathname}>
                    <NavbarLink
                      page={page}
                      pathname={pathname}
                      retracted={retracted}
                    />
                  </li>
                )
              } else {
                return <></>
              }
            })}
          </ul>

          <div className={style.profile} onClick={handlePathname}>
            <Profile retracted={retracted} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Sidebar
