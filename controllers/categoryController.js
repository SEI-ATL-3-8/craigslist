const models = require('../models')
const { category, post, tag } = models

const categoryController = {}

categoryController.getAll = async (req, res) => {
    try {
        const allCats = await category.findAll()
        res.json({categories: allCats})
    } catch (error) {
        res.json({error})
    }
}

categoryController.getOne = async (req, res) => {
    try {
        const oneCategory = await category.findOne({where: {id: req.params.id}})

    } catch (error) {
        res.json({error})
    }
}

categoryController.getPosts = async (req, res) => {
    try {
        const foundCategory = await category.findOne({
            where: {id: req.params.id},
            include: [{model: post}]
        })
        res.json({category: foundCategory})
    } catch (error) {
        res.json({error})
    }
}

categoryController.createPost = async (req, res) => {
    try {
        const newPost = await post.findOrCreate({
            where: {title: req.body.title},
            defaults: {
                categoryId: req.params.id,
                description: req.body.description
            }
        })
        res.json({post: newPost})
    } catch (error) {
        res.json({error})
    }
}

categoryController.associateTag = async (req, res) => {
    try {
        const foundCategory = await category.findOne({where: {id: req.params.categoryId}})
        const foundTag = await tag.findOne({where: {id: req.params.tagId}})
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

module.exports = categoryController