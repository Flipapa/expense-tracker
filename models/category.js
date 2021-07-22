const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  icon: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('Category', categorySchema)