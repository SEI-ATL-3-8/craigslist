const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const categoryRouter = require('./routers/categoryRouters')
app.use('/category', categoryRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})