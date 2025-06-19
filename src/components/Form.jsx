import styles from '../Styles/Form.module.css'
const Form = ({size="small", placeHolder="Dirección de correo"}) => {
  return (
    <form action="#" method="post" className={styles.form}>
        {/* aqui iría el label pero necesito id dinamico para que no todos los ids sean iguales */}
        <input type="text" placeholder={placeHolder} className={styles.inputText}/>
    </form>
  )
}

export default Form