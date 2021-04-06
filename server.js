const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

const cors = require('cors')
const categoryRoutes = require('./routes/categoryRoutes')
const tagRoutes = require('./routes/tagRoutes')
const postRoutes = require('./routes/postRoutes')
app.use(cors())
app.use('/catergories', categoryRoutes)
app.use('/tags', tagRoutes)
app.use('/posts', postRoutes)