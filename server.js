const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app)
const cors = require('cors')
const categoryRoutes = require('./routes/categoryRoutes')

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Spinning the hamster wheels')
})

app.use('/categories', categoryRoutes)



app.listen(PORT, () => {
    console.log(`Craigslist V.${PORT}`)
    routesReport.print()
})