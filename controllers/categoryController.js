const models = require('../models')
const categoryRouter = require('../routers/categoryRouter')

const categoryController = {}

categoryController.getAllCategory = async (req,res) => {
  try {
    const categories = await models.category.findAll()
  res.json({categories})
  } catch (error) {
    res.json({error})
  }
}

categoryController.getCategory = async (req,res) => {
  try {
    const category = await models.category.findOne({
      where: {
        id: req.params.id
      }
    })
      res.json({category})
  } catch (error) {
    res.json({error})
  }
}

categoryController.addPostInCategory = async (req,res) => {
  try {
    const newPostInCategory = await models.category.create({
      where: {title: req.body.title},
        defaults: {
          description: req.body.description,
          categoryId: req.params.id
          
      } 
    })
    res.json({newPostInCategory})
  } catch (error) {
    res.json({error})
  }
}

categoryController.associateWithTag = async (req, res) => {
  try {
      const foundCategory = await models.category.findOne({
        where: {
          id: req.params.categoryId
        }
      })
      const foundTag = await models.tag.findOne({
        where: {
          id: req.params.tagId
        }
      })
      const association = await foundCategory.addTag(foundTag)
      res.json({
          category: foundCategory,
          tag: foundTag,
          association
      })
  } catch (error) {
      res.json({error})
  }
}


categoryController.postInCat = async (req, res) => {
  try {
      const postInside = await models.category.findOne({
          where: {
            id: req.params.id
          },
          include: [{model: post}]
      })
      res.json({category: postInside})
  } catch (error) {
      res.json({error})
  }
}

module.exports = categoryController