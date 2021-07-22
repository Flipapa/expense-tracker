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

router.get('/new', (req, res) => {
  return res.render('new', { categoryList })
})

router.post('/', (req, res) => {
  const { name, date, category, amount, shop} = req.body
  console.log(req.body)
  return Record.create({ name, date, category, amount, shop})
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router