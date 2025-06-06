import React from 'react'
import Mail from './Mail'
import StartButton from './StartButton'

const Register = () => {
  return (
    <div>
        <Mail placeHolder='Dirección de correo'/>
        <StartButton />
    </div>
  )
}

export default Register