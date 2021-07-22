const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const { ifEqual } = require('./tools/handlebarshelpers')
const PORT = process.env.PORT || 3000

const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: { ifEqual } }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})