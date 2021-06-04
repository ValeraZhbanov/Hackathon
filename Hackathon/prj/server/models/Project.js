const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keys = require('../keys')

const project = new Schema({
  name: String,
  link: String,
  presentation: String,

  rating: {
    experts: Number,
    spectators: Number,
  },
})

module.exports = mongoose.model('Project', project)
