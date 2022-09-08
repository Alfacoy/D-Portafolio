import style from './style.module.css';

const Wellcome = () => {
    return(
        <header className={` ${style.header} g_container`}>
            <article>
                <div>
                    <h1 className={`g_title`}><strong>Brian Durand</strong></h1>
                    <h2 className={style.header__subtitle}><strong>Full Stack Developer</strong></h2>
                </div>

                <div className={style.header__color_light}>
                    <p>
                        Actualmente vivo en <b>Buenos Aires</b> (Argentina) y me encuentro
                        trabajando para <b>Cambalache Technologies</b> como <strong className={`g_highlight__primary`}>Salesforce Administrator</strong> &#128187;.
                    </p>

                    <p>
                        Por la noche, curso en el <b>Instituto Técnologico Beltrán</b> el segundo año de la carrera de <strong className={`g_highlight__primary`}>Analista en Sistemas</strong>.
                    </p>
                    <p>
                        <b>Mi Stack tecnológico:</b> Salesforce Administrator, MongoDB, Express, React, Node.
                    </p>

                    <a href="/curriculum.pdf" target="_blank" rel="noreferrer noopener" aria-label="Curriculum">
                <span className={`${style.header__button}`}>
                    Currículum
                </span>
                    </a>
                </div>
            </article>
            <article>
                <img src="/images/wellcome/night.png" alt="Imágen en versión obscura." className={style.header__image} />
            </article>
        </header>
    )
}

export default Wellcome;