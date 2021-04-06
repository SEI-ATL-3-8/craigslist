/*=============== SETUP ===============*/
// server setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

// routing table
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app);

// route module
const categoryRoutes = require('./routes/categoryRoutes');
const tagRoutes = require('./routes/tagRoutes');
const postRoutes = require('./routes/postRoutes');

// allow json body for input routes
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors());


/*=============== ROUTES ===============*/

app.use('/categories', categoryRoutes);
app.use('/tags', tagRoutes);
app.use('/posts', postRoutes);


/*=============== SERVER ===============*/

app.listen(PORT, () =>
{
    console.log(`server listening on port ${PORT}`);
    routesReport.print();
})