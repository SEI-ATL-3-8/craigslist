const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app)
const cors = require('cors')
const categoryRoutes = require('./routes/categoryRoutes')
const tagRoutes = require('./routes/tagRoutes')
const postRoutes = require('./routes/postRoutes')

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Spinning the hamster wheels')
})

app.use('/categories', categoryRoutes)
app.use('/tags', tagRoutes)
app.use('/posts', postRoutes)



app.listen(PORT, () => {
    console.log(`Craigslist V.${PORT}`)
    routesReport.print()
})