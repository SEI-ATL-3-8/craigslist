const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
const categoriesController = require('./controllers/categoriesController')
const routesReport = rowdy.begin(app)
app.use(express.json())

const categoriesRoutes = require('./routers/categoriesRouter')

app.use('/categories', categoriesRoutes)



app.listen(PORT, () => {
    console.log(`Listenig on port ${PORT}`)
    routesReport.print()
})