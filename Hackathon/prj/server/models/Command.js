const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keys = require('../keys')

const command = new Schema({
  name: String,
  captain: mongoose.Schema.Types.ObjectId, // User
})

module.exports = mongoose.model('Command', command)
