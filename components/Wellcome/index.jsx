import style from './style.module.css';

const Wellcome = () => {
    return(
        <header className={` ${style.header} g_container`}>
            <article>
                <div>
                    <h1 className={`g_title`}>Brian Durand</h1>
                    <h2 className={style.header__subtitle}>Full Stack Developer</h2>
                </div>

                <div className={style.header__color_light}>
                    <p className={style.header__paragraph}>
                        Actualmente vivo en <b>Buenos Aires</b> (Argentina) y me encuentro
                        trabajando para <b>Integrity Seguros</b> como <strong className={style.header__paragraph_highlight_blue}>Analista Programador Junior</strong>.
                    </p>

                    <p className={style.header__paragraph}>
                        Por la noche, curso en el <b>Instituto Técnologico Beltrán</b> el segundo año de la carrera de <strong className={style.header__paragraph_highlight_blue}>Analista en Sistemas</strong>.
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