import Link from 'next/link';
import style from './style.module.css';
import {useEffect, useState} from "react";

const Footer = () => {
    const [year,setYear] = useState();
    useEffect(()=> {
        const thisYear = new Date().getFullYear();
        setYear(thisYear)
    },[])

    return(
        <footer className={`${style.footer} ${style.footer_light}`}>
            <div className={`${style.footer__container}`}>
                <div className={`${style.footer__content}`}>
                    <div>
                        <p className={`${style.footer__titleLinks}`}><b>Redes sociales</b></p>
                        <ul>
                            <li><a className={`${style.footer__link}`} href="https://github.com/Alfacoy" target="_blank">Github</a></li>
                            <li><a className={`${style.footer__link}`} href="https://www.linkedin.com/in/durand18/" target="_blank">Linkedin</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className={`${style.footer__titleLinks}`}><b>Contenido</b></p>
                        <ul>
                            <Link href={"/about"}><a className={`${style.footer__link}`}>Sobre mí</a></Link>
                            <Link href={"/#contact"}><a className={`${style.footer__link}`}>Contacto</a></Link>
                            <Link href="/changelog"><a className={`${style.footer__link}`}>Changelog</a></Link>
                        </ul>
                    </div>
                </div>
                <div className={`${style.footer__copyright}`}>
                    <p>Hecho con &#128150; por <b>Brian Durand</b>. Copyright © {year}.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;