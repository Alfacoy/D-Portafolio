import { useState, useEffect } from 'react';

import style from './style.module.css';

const Contact = () => {
    const [state, setState] = useState('');
    
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
        if (result.status === 'Success') {
            setState('')
        }

        if(result.status === 'Success'){
            event.target.email.value = '';
            event.target.message.value = '';
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
                        <button type="submit" className={`button`} disabled={state === 'Loading' ? true : false}>
                            {state === 'Loading' ? 'Espere' : 'Enviar'}
                        </button>
                    </form>
                    <div className={style.contact_socialMedia}>
                        <p>Si te interesa, puedes buscarme en mis <b>redes sociales</b>.</p>
                        <ul>
                            <a href='https://github.com/Alfacoy' target="_blank">
                                <li className={`${style.socialMedia__box}`}>
                                    <img src="/images/icon/social_media/github_light.svg" className={`${style.socialMedia_image}`} />
                                     <span>Github</span>
                                </li>
                            </a>
                            <a href='https://www.linkedin.com/in/durand18/' target="_blank">
                                <li className={`${style.socialMedia__box}`}>
                                    <img src="/images/icon/social_media/linkedin_light.svg" className={`${style.socialMedia_image}`} />
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