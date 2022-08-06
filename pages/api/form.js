import {createTransport} from 'nodemailer';
import config from '../../config';

export default async function handler(req,res) {
    const {email,message} = req.body
    if (!email || !message) return res.status(404).json({ status: 'Error', message: 'No se puede enviar un mail sin datos.' })
    try {
        await sendEmail(email, message);
        res.status(200).json({ status: 'Success' });
    } catch (error) {
        res.status(500).json({ status: 'Error' });
    }
}


async function sendEmail(subject,content){
    const trasporter = createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: config.email.user,
            pass: config.email.pass
        }
    })

    let message = `
        <h1>Mensaje procedente del Portafolio</h1>
        <b>Email de contacto</b><br/>
        ${subject}
        <br/><br/>
        <b>Mensaje</b><br/>
        ${content}
    `

    const mailOptions = {
        from: "Mensajería Web",
        to: config.email.to,
        subject: `Mensaje de Contacto Web - ${subject}`,
        html: message
    }

    try {
        const info = await trasporter.sendMail(mailOptions)
        return info;
    } catch (error) {
        return error;
    }
}