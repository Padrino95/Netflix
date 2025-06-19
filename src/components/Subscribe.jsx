import React from 'react'
import RegisterInfo from './RegisterInfo'
import FormSubscribe from './FormSubscribe'

const Subscribe = () => {
  return (
    <div>
      <RegisterInfo text='¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.' />
      <FormSubscribe />
    </div>
  )
}

export default Subscribe