import React from 'react'
import Logo from './Logo'
import LenguageSelector from './LenguageSelector'
// import Login from './Login'
import  "../Styles/Header.css";
import Button from './Button';

// Es igualmente accesible dentro de la función del componente. No se vuelve a cargar con cada render
const languages = ["Español", "Inglés", "Francés", "Japonés", "Canario"];

const Header = () => {
  const onClickLoginButton = ()=>{
    alert("Olah  k aseh");
  }
  return (
        <header className='header'>
            <Logo />
            <div className="header-right">
                <LenguageSelector options={languages} />
                <Button onClick={onClickLoginButton}>Iniciar sesión</Button>
                
            </div>
        </header>
  )
}

export default Header