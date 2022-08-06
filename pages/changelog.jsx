import CustomHead from "../components/CustomHead";
import style from '../styles/Changelog.module.css';

export default function Home() {
    return (
        <>
            <CustomHead title="Changelog | Full Stack Developer" follow />
            <article className="g_container">
                <h1 className="g_title">Changelog</h1>
                <hr />
                <section className={style.changelog}>
                    <h3><a href="https://github.com/Alfacoy/D-Portafolio/pull/1" target="_blank" rel='noopener noreferrer'>RoadToV1</a> - 1.0.0</h3> 
                    <i>[Mayor Update] - 2022/08/06</i>
                    <h4>Agregado</h4>
                    <ul>
                        <li>Se implementa un Menú fijo y una Bienvenida a la web.</li>
                        <li>Se agrega una sección de Contacto con un formulario y los enlaces a las redes sociales.</li>
                        <li>Se agrega un Footer con los enlaces generales de la web.</li>
                        <li>Se redacta y agrega un Sobre Mí para dar contexto de como llegué acá.</li>
                        <li>Se crea un componente CustomHead para trabajar los meta tags de las distintas páginas.</li>
                        <li>Se agrega un nuevo Curriculum actualizado.</li>
                        <li>Se agrega Google Search Console.</li>
                    </ul>
                    <h4>Modificado</h4>
                    <ul>
                        <li>Se aplica transparencia en el Menú para que no moleste a la vista en pantallas móviles.</li>
                        <li>Se le modifican las etiquetas del título y subtítulo principal por strong para mejorar el SEO.</li>
                        <li>Se modifica los títulos del Footer a mayúscula.</li>
                        <li>Se modifico la forma de verse el texto de Copyright en pantallas pequeñas.</li>
                        <li>Se modifico la forma en que se distribuye el contenido del Footer.</li>
                    </ul>
                    <h4>Solucionado</h4>
                    <ul>
                        <li>Se soluciona un problema visual del Menú y Footer que al acercar el cursor sobre un enlace este brillara sin haberlo tocado aún.</li>
                        <li>Se agrega rel=noopener noreferrer a los enlaces externos.</li>
                        <li>Se soluciona un problema visual que desentraba los enlaces de redes sociales.</li>
                    </ul>
                </section>
            </article>
        </>
    )
}

