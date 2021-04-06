const express = require('express')
const app = express()
const postRoutes = require('./routes/postRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    routesReport.print()
})

app.use('/post', postRoutes)
app.use('/category', categoryRoutes)