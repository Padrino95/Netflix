import Detail from './Detail'
import '../Styles/FAQs.css'

const info = [
    {
        summary: "¿Qué es Netflix?",
        content: "Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet. Puedes ver todo lo que quieras, cuando quieras, por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!"
    },
    {
        summary: "¿Cuánto cuesta Netflix?",
        content: "Disfruta de Netflix en tu smartphone, tableta, Smart TV, ordenador o dispositivo de streaming, todo por una tarifa mensual fija. Planes desde 6,99 € a 19,99 € al mes. Sin cargos adicionales ni contratos."
    },
    {
        summary: "¿Dónde puedo ver Netflix",
        content: "Disfruta donde quieras y cuando quieras. Inicia sesión con tu cuenta de Netflix para disfrutar al instante de todo el contenido de Netflix.com desde tu ordenador personal o en cualquier dispositivo conectado a internet que ofrezca la aplicación de Netflix, entre ellos, smart TV, smartphones, tabletas, reproductores multimedia de streaming y consolas de juegos. También puedes descargar tus series favoritas con la aplicación de iOS o Android. Usa las descargas para ver títulos dondequiera que vayas y cuando no dispongas de conexión a internet. Netflix siempre te acompaña."
    },
    {
        summary: "¿Cómo cancelo?",
        content: "Netflix es flexible. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: activa o cancela tu cuenta en cualquier momento."
    },
    {
        summary: "¿Qué puedo ver en Netflix?",
        content: "Netflix dispone de una amplia biblioteca de originales de Netflix galardonados, títulos de anime, series de TV, documentales, largometrajes y otros contenidos. Ve todo el contenido que quieras, cuando quieras."
    },
    {
        summary: "¿Es Netflix bueno para los niños?",
        content: "La experiencia infantil de Netflix se incluye en la suscripción para que los padres tengan el control mientras los niños disfrutan de series y películas familiares en su propio espacio. Los perfiles infantiles incluyen controles parentales protegidos por PIN que te permiten restringir la calificación por edades del contenido que pueden ver los niños y bloquear determinados títulos que no quieras que vean."
    }
];

const getInfo = (array) =>
    array.map((item, i) => {
        const { summary, content } = item;
        return (
            <details className="faq" key={i}>
                <summary>
                    {summary}
                    <span className="icon">+</span>
                </summary>
                <div className="content">{content}</div>
            </details>
        );
    });

const FAQs = () => {
    const details = getInfo(info);
    return <section className="faq-container">
        <h2>Preguntas frecuentes</h2>
        <div style={{paddingTop:'1rem'}}>
            {details}
        </div>
    </section>;
};


export default FAQs