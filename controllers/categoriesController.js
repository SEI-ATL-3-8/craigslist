const models = require('../models')

const categoriesController = {}

categoriesController.getAll = async (req, res) => {
    try {
        let allCats = await models.category.findAll()
        res.json({ allCats })
    } catch (error) {
        res.json({ error })
    }
}


categoriesController.getOne = async (req, res) => {
    try {
        let oneCat = await models.category.findOne({
            where:{
                id: req.params.id
            }
        })
        res.json({oneCat})
    } catch (error) {
        res.json({error})
    }
}

categoriesController.createPost = async (req, res) => {
    try {
        let cat = await models.category.findOne({
            where:{
                id: req.params.id
            }
        })
        let newPost = await models.post.create({
            name: req.body.name,
            description: req.body.description
        })
        cat.addPost(newPost)
        res.json({cat, newPost})
    } catch (error) {
        res.json({error})
    }
}

categoriesController.getAllPosts = async (req, res) => {
    try {
        let cat = await models.category.findOne({
            where:{
                id: req.params.id
            }
        })
        let posts = await cat.getPosts()
        res.json({cat, posts})
    } catch (error) {
        res.json ({error})
    }
}

categoriesController.assCatTag = async (req, res) => {
    try {
        const category = await models.category.findOne({
            where:{
                id: req.params.categoryId
            }
        })
        const tag = await models.tag.findOne({
            where:{
                id: req.params.tagId
            }
        })
       const done = await category.addTag(tag)
        res.json(done)
    } catch (error) {
        res.json({error})
    }
}
// categoriesController.assCatTag = async (req, res) => {
//     try {
//         const foundCategory = await category.findOne({where: {id: req.params.categoryId}})
//         const foundTag = await tag.findOne({where: {id: req.params.tagId}})
//         const association = await foundCategory.addTag(foundTag)
//         res.json({
//             category: foundCategory,
//             tag: foundTag,
//             association
//         })
//     } catch (error) {
//         res.json({error})
//     }
// }

// categoriesController.assCatTag = async (req,res) => {
//     try {
//      const category = await models.catergory.findOne({
//          where:{
//              id: req.params.catergoryId
//          }
//      })

//      const tag = await models.tag.findOne({
//          where:{
//              id: req.params.tagId
//          }
//      })

//      await category.addTag(tag)
//      res.json("tagging created");
//     } catch (error) {
//         res.json({error})
//     }
//  }


module.exports = categoriesController