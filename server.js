const express = require('express')
const app = express()

const routeReport = require('rowdy-logger').begin(app)

const models = require('./models')

app.use(express.json())

const getAllCategories = async (req, res) => {
  try {
    let categories = await models.category.findAll()
    res.json({ categories })
  } catch (error) {
    res.json({ error })
  }
}
app.get('/categories', getAllCategories)

const getSingleCategory = async (req, res) => {
  try {
    let category = await models.category.findOne({
      where: {
        id: req.params.id
      }
    })
    
    res.json({ category })
  } catch (error) {
    res.json({ error })
  }
}
app.get('/categories/:id', getSingleCategory)

const createNewPost = async (req, res) => {
  try {
    console.log(req.body);
    
    let newPost = await models.post.create({
      title: req.body.title,
      content: req.body.content
    })

    let category = await models.category.findOne({
      where: {
        id: req.params.id
      }
    })

    await category.addPost(newPost)

    res.json({
      category,
      post: newPost
    })
  } catch (error) {
    console.log(error);
    res.json({ error })
  }
}
app.post('/categories/:id/posts', createNewPost)

const getPostsInCategory = async (req, res) => {
  try {
    const category = await models.category.findOne({
      where: {
        id: req.params.id
      }
    })

    const posts = await category.getPosts()

    res.json({ category, posts })
  } catch (error) {
    res.json({ error: error.message })
  }
}
app.get('/categories/:id/posts', getPostsInCategory)

const getTags = async (req, res) => {
  try {
    const tags = await models.tag.findAll()
    res.json({ tags })
  } catch (error) {
    res.json({ error: error.message })
  }
}
app.get('/tags', getTags)

const associateTagAndPost = async (req, res) => {
  try {
    const tag = await models.tag.findOne({
      where: {
        id: req.params.tagId
      }
    })

    const post = await models.post.findOne({
      where: {
        id: req.params.postId
      }
    })

    await tag.addPost(post)

    res.json({ tag, post })
  } catch (error) {
    res.json({ error: error.message })
  }
}
app.put('/tags/:tagId/posts/:postId', associateTagAndPost)

const getPostsForTag = async (req, res) => {
  try {
    const tag = await models.tag.findOne({
      where: {
        id: req.params.id
      }
    })

    const posts = await tag.getPosts()

    res.json({ tag, posts })
  } catch (error) {
    res.json({ error: error.message })
  }
}
app.get('/tags/:id/posts', getPostsForTag)

const getTagsForPost = async (req, res) => {
  try {
    const post = await models.post.findOne({
      where: {
        id: req.params.id
      }
    })

    const tags = await post.getTags()

    res.json({ post, tags })
  } catch (error) {
    res.json({ error: error.message })
  }
}
app.get('/posts/:id/tags', getTagsForPost)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server started!');
  routeReport.print()
})
