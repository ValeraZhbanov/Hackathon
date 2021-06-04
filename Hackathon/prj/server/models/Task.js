const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keys = require('../keys')

const task = new Schema({
  text: String,
  links: [String],
  sources: [String],
})

module.exports = mongoose.model('Task', task)
