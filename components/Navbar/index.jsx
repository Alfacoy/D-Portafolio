import { useState, useContext } from "react";
import Link from "next/link";
import ThemeContext from "../Theme";
import style from './style.module.css';

const Navbar = ({themeController}) => {
    const [isActive,setIsActive] = useState(false);
    const currentTheme = useContext(ThemeContext);

    function handleClickBurger() {
        setIsActive(!isActive);
    }

    function handleClickLink() {
        setIsActive(false);
    }
    function handleClickTheme(e) {
        if(e.target.attributes[0]?.nodeValue != currentTheme && e.target.localName != 'div') {
            themeController(e.target.attributes[0].nodeValue);
        }
    }

    return(
        <nav className={`${style.navbar}`}>
           <div className={`${style.navbar__top}`}>
                <div className={`${style.navbar__control}`}>
                    <span onClick={handleClickBurger} className={`${style.navbar__burger}`}>&#9776;</span>
                    <b className={`${style.navbar__brand}`}><Link href="/">Brian Durand</Link></b>
                    <div className={`${style.navbar__toogle}`}>
                    { 
                        currentTheme === 'dark' ?
                        <div onClick={handleClickTheme}>
                            <span name="light">&#127774;</span>
                        </div>
                        :
                        <div onClick={handleClickTheme}>
                            <span name="dark">&#127771;</span>
                        </div>
                        }
                    </div>
                </div>
                <div className={`${style.navbar__content}`}>
                    <ul className={`${style.navbar__links} ${!isActive ? `${style.navbar__hide}` : null }`}>
                        <li><Link href="/about" onClick={handleClickLink} className={`${style.navbar__link}`}>Sobre Mí</Link></li>
                        <li><Link href="/skills" onClick={handleClickLink} className={`${style.navbar__link}`}>Habilidades</Link></li>
                        <li><Link href="/#contact" onClick={handleClickLink} className={`${style.navbar__link}`}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;