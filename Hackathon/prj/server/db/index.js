const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const keys = require('../keys')

exports.initSessionStore = function () {
  const store = new MongoDBStore({
    uri: keys.DB_URI,
    collection: 'poSessions',
  })

  // eslint-disable-next-line no-console
  store.on('error', (error) => console.log(error))

  return store
}

exports.connect = function () {
  return (
    mongoose
      .connect(keys.DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      // eslint-disable-next-line no-console
      .then(() => console.log(`DB Connected! - ${keys.DB_URI}`))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  )
}
