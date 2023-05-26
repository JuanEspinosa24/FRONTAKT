import React from 'react'
import { MyNavbar } from '../components/Inicio/MyNavbar'
import { InicioSection } from '../components/Inicio/InicioSection'
import { Contact } from '../components/Inicio/Contact'

export const Inicio = () => {
  return (
    <div>
        {/* <MyNavbar/> */}
        <InicioSection/>
        <Contact/>
    </div>
  )
}
