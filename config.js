import dotenv from 'dotenv';
dotenv.config();

const config = {
    email: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        to: process.env.EMAIL_TO,
    }, 
    google: {
        tracking: process.env.GOOGLE_ANALYTICS
    }
}

export default config;