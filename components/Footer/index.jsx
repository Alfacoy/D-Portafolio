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
                            <li className={`${style.footer__link}`}><a href="https://github.com/Alfacoy" target="_blank">Github</a></li>
                            <li className={`${style.footer__link}`}><a href="https://www.linkedin.com/in/durand18/" target="_blank">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`${style.footer__copyright}`}>
                    <p>Hecho con <span className={style.footer__hearth}>❤</span> por Brian Durand. Copyright © {year}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;