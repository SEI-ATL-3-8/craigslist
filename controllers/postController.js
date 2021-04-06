const models = require('../models')
const postRouter = require('../routers/postRouter')

const postController = {}

postController.tagsFromPost = async (req, res) => {
  try {
      const getPost = await models.post.findOne({
          where: {
            id: req.params.id
          }
      })
      const tagsFromPost = await models.tag.getTags()
      res.json({getPost, tagsFromPost})
  } catch (error) {
      res.json({error})
  }
}

module.exports = postController