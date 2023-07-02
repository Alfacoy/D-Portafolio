import { useContext } from "react";
import ThemeContext from "../Theme";
import style from './style.module.css';

const Stats = () => {
    const currentTheme = useContext(ThemeContext);
    return(
        <div className={`${style.stats} ${currentTheme == 'dark' ? `${style.black}`: null}`}>
            <div>
                <p>Rango Trailblazer <strong>Ranger</strong></p>
            </div>
            <div className={style.stats_content}>
                <div>
                    <p>100</p>
                    <p><b>Badges</b></p>
                </div>
                <div>
                    <p>7</p>
                    <p><b>Superbadges</b></p>
                </div>
                <div>
                    <p>1</p>
                    <p><b>Certificaciones</b></p>
                </div>
            </div>
        </div>
    )
}

export default Stats;