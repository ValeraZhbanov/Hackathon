const Command = require('../models/Command')

exports.selectById = async (req, res) => {
  try {
    const value = await Command.findById(req.params.id).select()
    return res.status(200).json(value)
  } catch (error) {
    return res.status(422).json(error)
  }
}

exports.select = async (req, res) => {
  try {
    const values = await Command.find(req.body).select()
    return res.status(200).json(values)
  } catch (error) {
    return res.status(422).json(error)
  }
}

exports.insert = async (req, res) => {
  const value = new Command(req.body)
  return value.save((errors, saved) => {
    if (errors) return res.status(422).json({ errors })
    return res.json(saved)
  })
}

exports.update = async (req, res) => {
  const value = await Command.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!value) return res.status(404).json({ success: false, data: {} })
  return res.json({ success: true })
}
