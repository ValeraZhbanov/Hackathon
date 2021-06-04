const moment = require('moment')

const Task = require('../models/Task')

exports.selectById = async (req, res) => {
  try {
    const value = await Task.findById(req.params.id).select()
    return res.status(200).json(value)
  } catch (error) {
    return res.status(422).json(error)
  }
}

exports.select = async (req, res) => {
  try {
    const values = await Task.find(req.body).select()
    return res.status(200).json(values)
  } catch (error) {
    return res.status(422).json(error)
  }
}

exports.insert = async (req, res) => {
  const value = new Task(req.body)
  return value.save((errors, saved) => {
    if (errors) return res.status(422).json({ errors })
    return res.json(saved)
  })
}

exports.update = async (req, res) => {
  const value = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!value) return res.status(404).json({ success: false, data: {} })
  return res.json({ success: true })
}

exports.insertFile = async (req, res) => {
  const file = req.files.file

  if (file.size > 20 * 1024 * 1024) {
    return res.status(400).json({
      success: false,
      error: 'Please upload report file less than 20 MB',
    })
  }

  file.name = `${moment().format('DDMMYYYY-HHmmss_SSS')}-${file.name}`

  file.mv(`static/uploads/${file.name}`, async (err) => {

    if (err) return res.status(422).json({ err })
    
    const value = await Task.findById(req.params.id).select()

    if (!value) return res.status(404).json({ success: false, data: {} })

    value.sources.push(file.name)

    const update_value = await Task.findByIdAndUpdate(req.params.id, value, {
      new: true,
      runValidators: true,
    })

    if (!update_value) return res.status(404).json({ success: false, data: {} })

    res.status(200).json({
      success: true,
      data: file.name,
    })
  })
}
