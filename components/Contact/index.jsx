import style from './style.module.css';

const Contact = () => {
    async function handleSubmit(event){
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            message: event.target.message.value,
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
        const response = await fetch(endpoint, options)
        const result = await response.json()

        if(result.status === 'Success'){
            event.target.email.value = '';
            event.target.message.value = '';
        }
    }
    return(
       <section className={`${style.contact}`} id="contacto">
            <div className={`g_container`}>
                <h3 className={`g_title`}>Contacto</h3>
                <div className={`${style.contact__container}`}>
                    <form onSubmit={handleSubmit} className={`${style.contact__form}`}>
                        <div className='g_input__box'>
                            <label>Email</label>
                            <input className='g_input' type="email" id="email" name="email" required  />
                        </div>
                        <div className='g_input__box'>
                            <label>Mensaje</label>
                            <textarea className='textarea' id="message" name="message" required />
                        </div>
                        <button type="submit" className={`button`}>Enviar</button>
                    </form>
                    <div className={style.contact_socialMedia}>
                        <p>Si te interesa, puedes buscarme en mis <b>redes sociales</b>.</p>
                        <ul>
                            <a  href='https://github.com/Alfacoy' target="_blank"><li className={style.socialMedia__box}>Github</li></a>
                            <a href='https://www.linkedin.com/in/durand18/' target="_blank"><li className={style.socialMedia__box}>Linkedin</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;