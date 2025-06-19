import Button from "./Button"
import styles from '../Styles/Price.module.css'

const Price = ({title="Todo lo que te encanta de Netflix por solo 6,99€", subTitle="Elige nuestro plan más asequible, que tieen anuncios"}) => {
  return (
    <div className={styles.price}>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p>{subTitle}</p>
      </div>
      <div>
        <Button color="grey" size="medium">Más información</Button>
      </div>
    </div>
  )
}

export default Price