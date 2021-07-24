const Record = require('../record')
const recordList = require('./record.json')
const db = require('../../config/mongoose')

db.once('open', async () => {
  console.log('recordSeeder start!')
  await Record.create(recordList)
  console.log('done!')
  db.close()
})