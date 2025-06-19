import React from 'react'
import styles from '../Styles/Button.module.css'

const Button = ({children, type="button", size="small", color="red" ,onClick}) => {
  return (
    <button onClick={onClick} type={type} className={` ${styles.btn} ${styles[size]} ${styles[color]}`}>
        {children}
    </button>
  )
}

export default Button