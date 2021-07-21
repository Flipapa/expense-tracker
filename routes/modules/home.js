const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

const categoryList = []
Category.find()
  .lean()
  .then(categories => 
    categories.forEach(category => categoryList.push(category.name))
  )
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .sort({date: 'desc'})
    .then(records => res.render('index', { records, categoryList }))
    .catch(error => console.error(error))
})

module.exports = router