const nodemailer = require('nodemailer')
const keys = require('../keys')

const sendEmail = async (options) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: keys.SMTP_HOST,
    port: keys.SMTP_PORT,
    auth: {
      user: keys.SMTP_EMAIL,
      pass: keys.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // send mail with defined transport object
  const message = {
    from: `${keys.FROM_NAME} <${keys.SMTP_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  }

  const info = await transporter.sendMail(message)

  // console.log('Message sent: %s', options.email)
  // eslint-disable-next-line no-console
  console.log('Message sent: %s', info.messageId)
}

module.exports = sendEmail
