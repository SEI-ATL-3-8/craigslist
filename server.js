const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
const cors = require('cors')

const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})

app.use(cors())

const catRoutes = require('./routes/catRoutes')
const postRoutes = require('./routes/postRoutes')

app.use('/categories', catRoutes)
app.use('/categories', postRoutes)