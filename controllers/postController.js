const { json } = require('sequelize/types')
const models = require('../models')
const post = require('../models/post')

const postController = {}

postController.allPosts = async (req, res) => {
    try {
        const post = await models.post.findAll()
        res.json({post})
    } catch (error) {
        res.json({error})
    }
}

postController.getPostById = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({post})
    } catch (error) {
        res.json({error})
    }
}

postController.createPost = async (req, res) => {
    try {
        const post = await models.post.create({
                title: req.body.title,
                description: req.body.description
            })
        res.json('Created!')
    } catch (error) {
        res.json({error})
    }
}

postController.deletePost = async (req, res) => {
    try {
        const post = await models.post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json('Deleted!')
    } catch (error) {
        res.json({error})
    }
}

postController.addCategoryToPost = async (req,res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        const category = await models.category.findOne({
            where: {
                name: req.body.name
            }
        })
        post.setCategory(category)
        res.json("done!")
    } catch (error) {
        res.json({error})
    }
}

postController.getCategory = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        await post.getCategory()
    } catch (error) {
        res.json({error})
    }
}

postController.addTag = async (req, res) => {
    const post = await models.post.findOne({
        where: {
            id: req.params.id
        }
    })
    const tag = await models.tag.findOne({
        where: {
            id: req.params.tagId
        }
    })
    post.addTag(tag)
    res.json('Added!')
}

postController.getTags = async (req, res) => {
    const post = models.post.findOne({
        where: {
            id: req.params.id
        }
    })
    const tags = await post.getTags()
    res.json(tags)
}

module.exports = postController