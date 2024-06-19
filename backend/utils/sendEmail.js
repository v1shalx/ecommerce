const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false // Accept self-signed certificates
        }
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", result);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

module.exports = sendEmail;
