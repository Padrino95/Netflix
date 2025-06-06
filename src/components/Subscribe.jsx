import React from 'react'
import Register from './Register'
import RegisterInfo from './RegisterInfo'

const Subscribe = () => {
  return (
    <div>
        <RegisterInfo text='¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.'/>
        <Register />
    </div>
  )
}

export default Subscribe