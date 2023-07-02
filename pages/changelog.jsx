import CustomHead from "../components/CustomHead";
import style from '../styles/Changelog.module.css';

export default function Home() {
    return (
        <>
            <CustomHead title="Changelog | Brian Durand" follow />
            <article className="g_container">
                <h1 className="g_title">Changelog</h1>
                <hr />
                <section className={`${style.changelog}`}>
                    <h3 className="g_highlight__primary"><a href="https://github.com/Alfacoy/D-Portafolio/pull/7" target="_blank" rel='noopener noreferrer'>ShowTheSkills - 1.4.1</a></h3>
                    <i>[Minor Update] - 2023/06/19</i>
                    <h4>Agregado</h4>
                    <ul>
                        <li>Se agrega una nueva sección con nuestras habilidades.</li>
                        <li>Se trabaja en una nueva paleta de colores.</li>
                    </ul>
                    <h4>Modificado</h4>
                    <ul>
                        <li>Se re trabaja el CSS en base a la nueva paleta de colores.</li>
                        <li>Se corrigen algunos acentos.</li>
                    </ul>
                </section>
                <hr />
                <section className={`${style.changelog}`}>
                    <h3 className="g_highlight__primary"><a href="https://github.com/Alfacoy/D-Portafolio/pull/6" target="_blank" rel='noopener noreferrer'>NewContent - 1.3.1</a></h3>
                    <i>[Minor Update] - 2023/04/15</i>
                    <h4>Agregado</h4>
                    <ul>
                        <li>Se agrega el enlace de trailblazer en la sección Contacto y Footer.</li>
                        <li>Se agrega la sección proyectos en el Footer.</li>
                        <li>Se agrega el proyecto de Documentación en Footer.</li>
                        <li>Se agrega el proyecto de Webtools en Footer.</li>
                        <li>Ambos proyectos se agregan como subdominios al portafolio.</li>
                    </ul>
                    <h4>Modificado</h4>
                    <ul>
                        <li>Se modifica el texto de bienvenida.</li>
                        <li>Se mejora la estructura del curriculum.</li>
                        <li>Se hace una mejora en el tiempo de duración para la animación del hover en los botones de contacto.</li>
                        <li>Ligeros cambios en la metadata.</li>
                    </ul>
                </section>
                <hr />
                <section className={`${style.changelog}`}>
                    <h3 className="g_highlight__primary"><a href="https://github.com/Alfacoy/D-Portafolio/pull/5" target="_blank" rel='noopener noreferrer'>ShowTheMetrics - 1.2.1</a></h3>
                    <i>[Minor Update] - 2022/12/18</i>
                    <h4>Agregado</h4>
                    <ul>
                        <li>Se agrega Google Analytics de forma global en la web.</li>
                    </ul>
                </section>
                <hr />
                <section className={`${style.changelog}`}>
                    <h3 className="g_highlight__primary"><a href="https://github.com/Alfacoy/D-Portafolio/pull/2" target="_blank" rel='noopener noreferrer'>LightsON - 1.1.1</a></h3>
                    <i>[Minor Update] - 2022/12/18</i>
                    <h4>Agregado</h4>
                    <ul>
                        <li>Se agrega un Burguer Nav para dispositivos móviles y tablets.</li>
                        <li>Se agregan los temas <i>Claro</i> y <i>Obscuro</i>.</li>
                        <li>Se agrega una separación de línea entre cada versión nueva de Changelog.</li>
                        <li>En donde dejo mi nombre como firma le adjunto un enlace al Linkedin.</li>
                    </ul>
                    <h4>Modificado</h4>
                    <ul>
                        <li>Cambiamos de empresa!!! &#127881; Tenemos un nuevo trabajo .</li>
                        <li>Se le hace un pequeño refactor al CSS general de la web.</li>
                        <li>Se actualiza a la versión 13 de Next.js.</li>
                    </ul>
                    <h4>Solucionado</h4>
                    <ul>
                        <li>Se corrije un error visual para dispositivos móviles que al presionar el botón Curriculum el texto desaparece hasta que se vuelve a presionar la pantalla.</li>
                    </ul>
                    <h4>Removido</h4>
                    <ul>
                        <li>Se elimina temporalmente la permanencia en empleos para hacer luego un rework.</li>
                        <li>Se elimina la Introducción de la seccion “Sobre Mí”.</li>
                    </ul>
                </section>
                <hr />
                <section className={`${style.changelog}`}>
                    <h3 className="g_highlight__primary"><a href="https://github.com/Alfacoy/D-Portafolio/pull/1" target="_blank" rel='noopener noreferrer'>RoadToV1 - 1.0.0</a></h3> 
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

