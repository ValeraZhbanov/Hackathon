
const SERVER_PORT = 3000;
const CLIENT_PORT = 8080;
const MONGO_PORT = 27017;

const SERVER_URL = `http://localhost:${SERVER_PORT}`
const CLIENT_URL = `http://localhost:${CLIENT_PORT}`
const MONGO_URL = `mongodb://localhost:${MONGO_PORT}/hackathons_service`

module.exports = {
    SERVER_PORT: SERVER_PORT,
    CLIENT_PORT: CLIENT_PORT,
    MONGO_PORT: MONGO_PORT,

    SERVER_URL: SERVER_URL,
    CLIENT_URL: CLIENT_URL,
    MONGO_URL: MONGO_URL,

    MAIL: {
        SMTP_HOST: 'smtp.mail.ru',
        SMTP_PORT: '25',
        SMTP_EMAIL: 'valerazbanovgs@mail.ru',
        SMTP_PASSWORD: '2FkmKeAcbBY91q6JGZgp',
        FROM_EMAIL: 'valerazbanovgs@mail.ru',
        FROM_NAME: '1',
    },
}