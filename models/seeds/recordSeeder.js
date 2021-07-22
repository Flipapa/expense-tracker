const Record = require('../record')
const recordList = require('./record.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('recordSeeder start!')
  Record.create(recordList)
    .then(() => {
      db.close()
      console.log('done!')
    })
})