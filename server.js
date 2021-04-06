const express = require('express');
const rowdy = require('rowdy-logger');
const categoryRouter = require('./routers/categoryRouter');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const rowdyReporter = rowdy.begin(app);

app.use('/categories', categoryRouter); 

app.listen(port, () => {
    console.log('server started');
    rowdyReporter.print();
});