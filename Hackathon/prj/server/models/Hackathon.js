const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keys = require('../keys')

const hackathon = new Schema({
  name: String,
  date_time_end: Date,
})

module.exports = mongoose.model('Hackathon', hackathon)
