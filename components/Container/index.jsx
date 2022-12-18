import { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CustomHead from '../CustomHead';
import ThemeContext from '../Theme';
import style from './style.module.css';

const Container = ({ children }) => {
    const [theme,setTheme] = useState('dark');

    return (  
        <ThemeContext.Provider value={theme}>
            <CustomHead title="Brian Durand | Full Stack Developer" index follow/>
            <div className={`${style.container} ${theme}`}>
                <Navbar themeController={setTheme}/>
                <main className={`${style.main}`}>
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeContext.Provider>     
    )
}

export default Container;