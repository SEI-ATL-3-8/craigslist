const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const cors = require('cors')
const routesReport = rowdy.begin(app)
const categoryRoute = require('./routes/categoryRoute')
const postRoute = require('./routes/postRoute')
const tagRoute = require('./routes/tagRoute')
app.use(express.json())
app.use(cors())
app.use('/categories', categoryRoute)
app.use('/posts', postRoute)
app.use('/tags', tagRoute)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
})