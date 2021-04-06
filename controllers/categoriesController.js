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

module.exports = categoriesController