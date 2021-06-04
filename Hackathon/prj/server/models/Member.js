const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keys = require('../keys')

const member = new Schema({
  command: mongoose.Schema.Types.ObjectId, // Command
  name: String,
  organization: String,
  phone: String,
})

module.exports = mongoose.model('Member', member)
