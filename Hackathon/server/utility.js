const nodemailer = require('nodemailer')
const constants = require('./constants')

const send_email = async (options) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 25,
        secure: true,
        auth: {
            user: constants.MAIL.SMTP_EMAIL,
            pass: constants.MAIL.SMTP_PASSWORD,
        },

    })

    try {

        await transporter.sendMail({
            from: `${constants.MAIL.FROM_NAME} <${constants.MAIL.SMTP_EMAIL}>`,
            to: options.email,
            subject: options.subject,
            text: options.message,
        })
        console.log("≈·‡‡‡‡‡‡‡Ú¸¸¸¸¸¸")

    } catch (error) {

        console.log(error)
    }
}


function gen_password(len) {
    var password = ''
    var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!π;%:?*()_+='
    for (var i = 0; i < len; i++)
        password += symbols.charAt(Math.floor(Math.random() * symbols.length))
    return password
}


module.exports = {
    gen_password: gen_password,
    send_email: send_email,
}