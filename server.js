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
app.use(cors())

const postRouter = require('./routers/postRouter')
app.use('/post', postRouter)

const categoryRouter = require('./routers/categoryRouter')
app.use('/category', categoryRouter)

const tagRouter = require('./routers/tagRouter')
app.use('/tag', tagRouter)

// const getAllCategory = async (req,res) => {
//   try {
//     let categories = await models.category.findAll()
//   res.json({categories})
//   } catch (error) {
//   res.json('cant get categories')
//   }
// }
// getAllCategory()