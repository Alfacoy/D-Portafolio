import style from './style.module.css';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Contact from "../Contact";

const Container =({children})=> (
    <div className={`${style.container}`}>
        <Navbar />
        <main className={`${style.main}`}>
            {children}
        </main>
        <Footer />
    </div>
)

export default Container;