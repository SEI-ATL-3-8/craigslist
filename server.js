const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const cors = require('cors')
const catRoute = require('./routes/catRoute')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(cors())
app.use('/category', catRoute)

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})




