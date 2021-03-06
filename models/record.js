const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  date: {
    type: String,
    require: true,
    trim: true
  },
  category: {
    type: String,
    require: true,
    trim: true
  },
  amount: {
    type: Number,
    require: true,
    trim: true
  },
  shop: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('Record', recordSchema)