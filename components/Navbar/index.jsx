import Link from "next/link";
import style from './style.module.css';

const Navbar = () => {
    return(
        <nav className={`${style.navbar}`}>
            <Link href="/"><a><b className={`${style.navbar__brand}`}>Brian Durand</b></a></Link>

            <ul className={`${style.navbar__links}`}>
                <Link href="/about"><a className={`${style.navbar__link}`}>Sobre Mí</a></Link>
                <Link href="/#contact"><a className={`${style.navbar__link}`}>Contacto</a></Link>
            </ul>
        </nav>
    )
}

export default Navbar;