import { useState } from 'react';
import  Script from 'next/script';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CustomHead from '../CustomHead';
import ThemeContext from '../Theme';
import style from './style.module.css';


const Container = ({ children }) => {
    const [theme,setTheme] = useState('dark');

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=G-HG9L20SGD6`} />
            <Script
             id="google-analytics"
             dangerouslySetInnerHTML={{
                __html:`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-HG9L20SGD6', {
                        page_path: window.location.pathname,
                    });
                `
             }}
             />
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
        </>
    )
}

export default Container;