const Category = require('../category')
const categoryList = require('./category.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('categorySeeder start!')
  Category.create(categoryList.results)
    .then(() => {
      db.close()
      console.log('done!')
    })
})