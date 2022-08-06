import style from './style.module.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CustomHead from '../CustomHead';

const Container = ({ children }) => (
    <>
        <CustomHead title="Brian Durand | Full Stack Developer" index follow/>
        <div className={`${style.container}`}>
            <Navbar />
            <main className={`${style.main}`}>
                {children}
            </main>
            <Footer />
        </div>
    </>
)

export default Container;