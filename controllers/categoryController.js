const models = require('../models')

const categoryController = {}

categoryController.getAllCats = async (req, res) => {
    try {
        let categories = await models.category.findAll()
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

// postController.createPost = async (req,res) => {
//     try {
//     let newPost = await models.post.create({
//         title: req.body.title,
//         description: req.body.description
//     })
//     res.json({newPost})
// } catch (error) {
//     res.json({error})
//     }
// }

module.exports = categoryController