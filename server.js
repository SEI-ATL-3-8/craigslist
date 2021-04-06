const express = require('express');
const rowdy = require('rowdy-logger');
const categoryRouter = require('./routers/categoryRouter');
const tagRouter = require('./routers/tagRouter');
const postRouter = require('./routers/postRouter');


const app = express();
const port = process.env.PORT || 3000;

const rowdyReporter = rowdy.begin(app);
app.use(express.json());

app.use('/tags', tagRouter);
app.use('/categories', categoryRouter); 
app.use('/posts',postRouter);

app.listen(port, () => {
    console.log('server started');
    rowdyReporter.print();
});