import React from 'react'
import TitleInfo from './TitleInfo'
import Subscribe from './Subscribe'
import styles from '../Styles/MainInfo.module.css'

const MainInfo = () => {
  return (
    <div className={`${styles.width} ${styles.white}`}>
        <TitleInfo />
        <Subscribe />

    </div>
  )
}

export default MainInfo

// DARLE A ESTE EL WIDTH Y MARGIN AUTO Y TODOS LOS FLEX
// PUEDE QUE TMBN TENGA QUE METER EL COLOR DEL TEXTO AQUI YA QUE TODO EL TEXTO DE ESTE COMPONENTE ES BLANCO