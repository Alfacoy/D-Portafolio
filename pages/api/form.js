import {createTransport} from 'nodemailer';
import config from '../../config';

export default async function handler(req,res) {
    const {email,message} = req.body
    if(!email || !message) return res.status(404).json({status:'Error',message:'No se puede enviar un mail sin datos.'})
    await sendEmail(email,message)

    res.status(200).json({status: 'Success'});
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

    const mailOptions = {
        from: "portafolio@gmail.com",
        to: config.email.to,
        subject: subject,
        html: content
    }

    try {
        const info = await trasporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.error(error)
    }
}