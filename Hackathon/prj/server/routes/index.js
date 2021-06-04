const express = require('express')
const session = require('express-session')
const passport = require('passport')
const fileupload = require('express-fileupload')

const keys = require('../keys')
const db = require('../db')

const user = require('./user')
const admin = require('./admin')
const hackathon = require('./hackathon')
const command = require('./command')
const member = require('./member')
const project = require('./project')
const task = require('./task')
const hackathon_command_project = require('./hackathon_command_project')


const app = express()

require('../services/passport')

// connect to DB
db.connect()
const store = db.initSessionStore()

app.use(express.json())
app.use(fileupload())

const sess = {
  name: 'hakaton-secure-session',
  secret: keys.SESSION_SECRET,
  cookie: { maxAge: 2 * 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: false,
  store,
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1)
  sess.cookie.secure = true
  sess.cookie.httpOnly = true
  sess.cookie.sameSite = true
  sess.cookie.domain = process.env.DOMAIN // .yourdomain.com
}

app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session())

app.use('/users', user)
app.use('/admin', admin)
app.use('/hackathon', hackathon)
app.use('/command', command)
app.use('/member', member)
app.use('/project', project)
app.use('/task', task)
app.use('/hackathon_command_project', hackathon_command_project)


module.exports = {
  path: '/api/v1',
  handler: app,
}
