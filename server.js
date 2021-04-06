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

const categoryRoutes = require('./routes/categoryRoutes');
app.use('/categories', categoryRoutes);

const tagRoutes = require('./routes/tagRoutes');
app.use('/tags', tagRoutes);

const postRoutes = require('./routes/postRoutes');
app.use('/posts', postRoutes);