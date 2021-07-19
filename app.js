const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000

const routes = require('./routes')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})