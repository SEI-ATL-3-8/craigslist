const models = require('../models');

const categoryController = {}

categoryController.getAll = async (req,res) => {
    try {
        let categories = await models.catergory.findAll()
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

categoryController.find = async (req,res) => {
        try {
        let category = await models.catergory.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({category})
    } catch (error){
        res.json({error})
    }
}

categoryController.createNewPost = async (req,res) => {
  try {
    let category = await models.catergory.findOne({
        where: {
            id: req.params.id
        }
    })
    let newPost = await category.createPost({
        title: req.body.title,
        description: req.body.description
    })
    res.json({category, newPost})
  } catch (error) {
      res.json({error})
  }
}

categoryController.getAllPosts = async (req,res) => {
    try {
      let category = await models.catergory.findOne({
          where: {
              id: req.params.id
          }
      })
      let posts = await category.getPosts()
      res.json({category, posts})
    } catch (error) {
        res.json({error})
    }
  }

  categoryController.associateWithTag = async (req,res) => {
    try {
     const category = await models.catergory.findOne({
         where:{
             id: req.params.catergoryId
         }
     })
 
     const tag = await models.tag.findOne({
         where:{
             id: req.params.tagId
         }
     })
 
     await category.addTag(tag)
     res.json("tagging created");
    } catch (error) {
        res.json({error})
    }
 }



module.exports = categoryController;