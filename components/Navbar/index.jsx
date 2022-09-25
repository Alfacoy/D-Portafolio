import Link from "next/link";
import { useState } from "react";
import style from './style.module.css';

const Navbar = () => {
    const [isActive,setIsActive] = useState(false);
    function handleClickBurger() {
        setIsActive(!isActive);
    }

    function handleClickLink() {
        setIsActive(false);
    }

    return(
        <nav className={`${style.navbar}`}>
            <div className={`${style.navbar__control}`}>
                <Link href="/"><a><b className={`${style.navbar__brand}`}>Brian Durand</b></a></Link>
                <span onClick={handleClickBurger} className={`${style.navbar__burger}`}>&#9776;</span>
            </div>
            <ul className={`${style.navbar__links} ${!isActive ? `${style.navbar__hide}` : null }`}>
                <li><Link href="/about"><a onClick={handleClickLink} className={`${style.navbar__link}`}>Sobre Mí</a></Link></li>
                <li><Link href="/#contact"><a onClick={handleClickLink} className={`${style.navbar__link}`}>Contacto</a></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;