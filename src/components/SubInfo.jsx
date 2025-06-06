import React from 'react'
import styles from '../Styles/SubInfo.module.css'

const SubInfo = ({text}) => {
  return (
    <p className={styles.subTittle}>{text}</p>
  )
}

export default SubInfo