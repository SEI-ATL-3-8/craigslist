const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')


const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

const categoryRoutes = require('./routes/categoryRoute');
const tagRoutes = require('./routes/tagRoute');
const postRoutes = require('./routes/postRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/categorie', categoryRoutes);
app.use('/tag', tagRoutes);
app.use('/post', postRoutes);



app.listen(PORT, () => {
    console.log(`listen ${PORT}`)
    routesReport.print()
})