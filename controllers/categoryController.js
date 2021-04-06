const models = require('../models');

const categoryController = {}

categoryController.getAll = async (req, res) => {
    try {
        let categories = await models.category.findAll()

    res.json({categories})
} catch (error) {
    res.json({error})
    }
}

categoryController.find = async (req, res) => {
    try {
        let oneCategory = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({oneCategory})
    } catch (error) {
        res.json({error})
    }
}

categoryController.create = async (req, res) => {
    try {
        let oneCategory = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })

        let newPost = await models.post.create({
            title: req.body.title,
            description: req.body.description
        })
        oneCategory.addPost(newPost)
        res.json({oneCategory, newPost})
    } catch (error) {
        res.json({error})
    }
}

categoryController.find = async (req, res) => {
    try {
        let oneCategory = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        let allPosts = await models.category.findAll()
        oneCategory.getPosts()
        res.json({oneCategory, allPosts})
    } catch (error) {
        res.json({error})
    }
}

categoryController.update = async (req,res) => {
    try {
        let updates = req.body
        let updateCategoryId = await models.tagging.findOne({
            where: {
                categoryId: req.body.categoryId
            }
        })
        let updateTagId = await models.tagging.findOne({
            where: {
                tagId: req.body.tagId
            }
        })
        updateCategoryId.update(updates)
        updateTagId.update(updates)
        res.json({updateCategoryId, updateTagId})
    } catch (error) {
        res.json({error})
    }
}

module.exports = categoryController;