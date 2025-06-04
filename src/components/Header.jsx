import React from 'react'
import Logo from './Logo'
import LenguageSelector from './LenguageSelector'
import Login from './Login'
import  "../Styles/Header.css";

const Header = () => {
    const languages = ["Español", "Inglés", "Francés", "Japonés", "Canario"];
  return (
    <>
        <header className='header'>
            <Logo />
            <div className="header-right">
                <LenguageSelector options={languages} />
                <Login text="Inciar sesión" />
            </div>
        </header>
    </>
  )
}

export default Header