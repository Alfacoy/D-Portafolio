import { useContext } from 'react';
import Link from 'next/link';
import themeContext from '../Theme';
import style from './style.module.css';

const Wellcome = () => {
    const theme = useContext(themeContext)
    return(
        <header className={` ${style.header} g_container`}>
            <article>
                <div>
                    <h1 className={`g_title`}><strong>Brian Durand</strong></h1>
                    <h2 className={style.header__subtitle}><strong>Salesforce Admin</strong></h2>
                </div>

                <div>
                    <p>
                        Actualmente vivo en <b>Buenos Aires</b> (Argentina) y me desempeño como <strong className={`g_highlight__primary`}>Administrador de Salesforce</strong> &#128187; en <b>Cambalache Technologies</b> desde Septiembre 2022. 
                    </p>
                    <p>
                        Tengo más de 5 años de experiencia en el rubro IT de los cuales hace 3 me encuentro trabajando en el ecosistema de Salesforce.
                    </p>
                    <div>
                        <Link href="/curriculum.pdf" target="_blank" rel="noreferrer noopener" aria-label="Curriculum">
                            <span className={`${style.header__button} ${theme != 'dark' ?  style.header__button_night : null }`}>
                                Currículum
                            </span>
                        </Link>
                    </div>
                </div>
            </article>
            <article>
                <img src={`/images/wellcome/${theme === 'dark' ? 'night' : 'day' }.png`} alt={theme === 'dark' ? 'Imagen versión obscura.' : 'Imagen versión clara.' } className={style.header__image} />
            </article>
        </header>
    )
}

export default Wellcome;