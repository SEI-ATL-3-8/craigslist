const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const cors = require('cors')
const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
console.log('The Server is Listening!')
routesReport.print()
})

// const postRoutes = require('./routers/postRoutes')
// const commentRoutes = require('./routers/commentRoutes')
// const topicRoutes = require('./routers/topicRoutes')

app.use(cors())