const Category = require('../category')
const categoryList = require('./category.json')
const db = require('../../config/mongoose')

db.once('open', async () => {
  console.log('categorySeeder start!')
  await Category.create(categoryList)
  console.log('done!')
  db.close()
})