import Button from './Button'
import Form from './Form'
import styles from '../Styles/FormSubscribe.module.css'

const onClickSubmit = () => {
    alert("Alert del submit");
}

const FormSubscribe = () => {
    return (
        <div className={styles.register}>
            <Form />
            <Button type="submit" size="big" onClick={onClickSubmit}>
                <span>Empezar</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="ChevronRightStandard"
                    aria-hidden="true"
                >
                    <path
                        fill="currentColor"
                        d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                    ></path>
                </svg>
            </Button>
        </div>
    )
}

export default FormSubscribe