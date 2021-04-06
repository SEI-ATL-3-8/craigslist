const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the root route')
})

const categoryRouter = require('./routers/categoryRouter')
app.use('/categories', categoryRouter)

const postRouter = require('./routers/postRouter')
app.use('/posts', postRouter)

const tagRouter = require('./routers/tagRouter')
app.use('/tags', tagRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})