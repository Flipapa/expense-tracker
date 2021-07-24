const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/filter', async (req, res) => {
  const categoryList = await Category.find().sort({ _id: 'asc' }).lean()
  const { categorySelector } = req.query
  const records = await Record.find({ category: categorySelector }).lean().sort({ _id: 'desc' })
  let totalAmount = 0
  for (let record of records) {
    totalAmount += record.amount
  }
  res.render('index', { totalAmount, records, categoryList, categorySelector })
})

router.get('/new', async (req, res) => {
  const categoryList = await Category.find().sort({ _id: 'asc' }).lean()
  res.render('new', { categoryList })
})

router.post('/', (req, res) => {
  const { name, date, category, amount, shop} = req.body
  Record.create({ name, date, category, amount, shop})
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:record_id/edit', async (req, res) => {
  const categoryList = await Category.find().sort({ _id: 'asc' }).lean()
  const id = req.params.record_id
  return Record.findById(id)
    .lean()
    .then(record => res.render('edit', { record, categoryList }))
    .catch(error => console.log(error))
})

router.put('/:record_id', (req, res) => {
  const id = req.params.record_id
  const { name, date, category, amount, shop } = req.body
  return Record.findById(id)
    .then(record => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      record.shop = shop
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:record_id', (req, res) => {
  const id = req.params.record_id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router