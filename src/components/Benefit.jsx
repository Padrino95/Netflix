import styles from '../Styles/Benefit.module.css'
const Benefit = ({children}) => {
  return (
    <article className={styles.article}>
        {children}
    </article>
  )
}

export default Benefit