const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

const categoryList = []
Category.find()
  .sort({ _id: 'asc' })
  .lean()
  .then(categories => 
    categories.forEach(category => categoryList.push(category))
  )
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .sort({date: 'desc', _id: 'desc'})
    .then(records => {
      let totalAmount = 0
      for (let record of records) {
        totalAmount += record.amount
      }
      res.render('index', { totalAmount ,records, categoryList })
    })
    .catch(error => console.error(error))
})

module.exports = router