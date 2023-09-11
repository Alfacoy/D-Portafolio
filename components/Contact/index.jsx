import { useState } from 'react';
import { useContext } from 'react';
import themeContext from '../Theme';
import style from './style.module.css';

const Contact = () => {
    const [state, setState] = useState('');
    const theme = useContext(themeContext);
    
    async function handleSubmit(event){
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            message: event.target.message.value.trim(),
        }
        
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/form'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        setState('Loading');
        const response = await fetch(endpoint, options)
        const result = await response.json()
        if (result.status === 'Success' || result.status === 'Error') {
            setState('')
        }

        if(result.status === 'Success'){
            event.target.email.value = '';
            event.target.message.value = '';
        }

        if (result.status === 'Error') {
            alert('Hubo un error al enviar el mail. Por favor, vuelva a intentarlo o envielo a briandurand1990@gmail.com')
        }
    }
    return(
       <section className={`${style.contact}`} id="contact">
            <div className={`g_container`}>
                <h3 className={`g_title`}>Contacto</h3>
                <div className={`${style.contact__container}`}>
                    <form onSubmit={handleSubmit} className={`${style.contact__form}`}>
                        <div className='g_input__box'>
                            <label>Email</label>
                            <input className='g_input' type="email" id="email" name="email" disabled={state === 'Loading' ? true : false} required  />
                        </div>
                        <div className='g_input__box'>
                            <label>Mensaje</label>
                            <textarea className='textarea' id="message" name="message" disabled={state === 'Loading' ? true : false} required />
                        </div>
                        <button type="submit" className={`button ${theme != 'dark' ?  style.button_night : null }`} disabled={state === 'Loading' ? true : false}>
                            {state === 'Loading' ? 'Espere' : 'Enviar'}
                        </button>
                    </form>
                    <div className={style.contact_socialMedia}>
                        <p>Si te interesa, puedes buscarme en mis <b className={`g_highlight__primary`}>redes sociales</b> <span>&#128227;</span>.</p>
                        <ul>
                            <a href='https://trailblazer.me/id/briandurand' target="_blank" rel='noopener noreferrer'>
                                <li className={`${style.socialMedia__box} ${theme == 'dark' ? `${style.socialMedia__box_light}` : null}`}>
                                    <img src="/images/icon/social_media/trailhead.svg" className={`${style.socialMedia_image} ${style.socialMedia_image__size}`} alt="Salesforce Icon" />
                                    <span>Trailblazer</span>
                                </li>
                            </a>
                            <a href='https://github.com/Alfacoy' target="_blank" rel='noopener noreferrer'>
                                <li className={`${style.socialMedia__box} ${theme == 'dark' ? `${style.socialMedia__box_light}` : null}`}>
                                    <img src="/images/icon/social_media/github_light.svg" className={`${style.socialMedia_image}`} alt="Github Icon"/>
                                     <span>Github</span>
                                </li>
                            </a>
                            <a href='https://www.linkedin.com/in/durandsalesforce/' target="_blank" rel='noopener noreferrer'>
                                <li className={`${style.socialMedia__box} ${theme == 'dark' ? `${style.socialMedia__box_light}` : null}`}>
                                    <img src="/images/icon/social_media/linkedin_light.svg" className={`${style.socialMedia_image}`} alt="Linkedin Icon" />
                                    <span>Linkedin</span>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;