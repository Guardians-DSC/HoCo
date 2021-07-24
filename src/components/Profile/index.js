import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.module.css'

export const Profile = ({ name, photo, alt, retracted }) => {
  return (
    <Link
      to='/perfil'
      className={`${style.container} ${retracted ? style.retracted : ''}`}
    >
      <img src={photo} alt={alt} className={style.photo} />

      <span className={style.name}>{name}</span>
    </Link>
  )
}

Profile.defaultProps = {
  photo: 'https://github.com/rodrigoec.png',
  alt: 'Foto de perfil do usuário rodrigoec no github',
  name: 'Rodrigo Eloy',
}
