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
        <footer className={`${style.footer}`}>
            <div className={`${style.footer__container}`}>
                <div className={`${style.footer__content}`}>
                    <div>
                        <p className={`${style.footer__titleLinks}`}><b>Proyectos</b></p>
                        <ul>
                            <li><a className={`${style.footer__link}`} href="https://www.docs.durandbrian.com/" target="_blank" rel='noopener noreferrer'>Mi documentación</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className={`${style.footer__titleLinks}`}><b>Redes sociales</b></p>
                        <ul>
                            <li><a className={`${style.footer__link}`} href="https://trailblazer.me/id/briandurand" target="_blank" rel='noopener noreferrer'>Trailblazer</a></li>
                            <li><a className={`${style.footer__link}`} href="https://github.com/Alfacoy" target="_blank" rel='noopener noreferrer'>Github</a></li>
                            <li><a className={`${style.footer__link}`} href="https://www.linkedin.com/in/durandsalesforce/" target="_blank" rel='noopener noreferrer'>Linkedin</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className={`${style.footer__titleLinks}`}><b>Contenido</b></p>
                        <ul>
                            <li><Link href={"/about"} className={`${style.footer__link}`}>Sobre mí</Link></li>
                            <li><Link href={"/skills"} className={`${style.footer__link}`}>Habilidades</Link></li>
                            <li><Link href={"/#contact"} className={`${style.footer__link}`}>Contacto</Link></li>
                            <li><Link href={"/changelog"} className={`${style.footer__link}`}>Changelog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`${style.footer__copyright}`}>
                    <p>Hecho con &#128150; por <b><a className={`${style.footer__link}`} href="https://www.linkedin.com/in/durandsalesforce/" target="_blank" rel='noopener noreferrer'>Brian Durand</a></b>. <span>Copyright © {year}.</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;