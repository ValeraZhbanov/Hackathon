const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keys = require('../keys')

const hackathon_command_project = new Schema({
  hackathon: mongoose.Schema.Types.ObjectId,
  command: mongoose.Schema.Types.ObjectId,
  task: mongoose.Schema.Types.ObjectId,
  project: mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model(
  'Hackathon_Command_Project',
  hackathon_command_project
)
