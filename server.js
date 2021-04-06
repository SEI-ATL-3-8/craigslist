const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger')
// const categoriesController = require('./controllers/categoriesController')
// const tagsController = require('./controllers/tagsController')
const routesReport = rowdy.begin(app)
app.use(express.json())

const categoriesRoutes = require('./routers/categoriesRouter')
const tagsRoutes = require('./routers/tagsRouter')
const postsRoutes = require('./routers/postsRouter')

app.use('/categories', categoriesRoutes)
app.use('/tags', tagsRoutes)
app.use('/posts', postsRoutes)


app.listen(PORT, () => {
    console.log(`Listenig on port ${PORT}`)
    routesReport.print()
})