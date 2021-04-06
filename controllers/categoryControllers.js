const models = require('../models')
const crypto = require('crypto')

const categoryControllers = {}
let keys = []

categoryControllers.getAll = async (req, res) => {
    try {
        const categories = await models.category.findAll()
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

categoryControllers.getOne = async (req, res) => {
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

categoryControllers.createPost = async (req, res) => {
    try {
        const category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        const post = await models.post.create({
            title: req.body.title,
            description: req.body.description,
            picture: req.body.picture,
            key: await randomKey()
        })
        const newPost = await category.addPost(post)
        res.json({newPost})
    } catch (error) {
        res.json({error})
    }
}

categoryControllers.getPosts = async (req, res) => {
    try {
        const category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        const allPosts = await category.getPosts()
        res.json({category, allPosts})
    } catch (error) {
        res.json({error})
    }
}




const randomKey = () => {
    const key = crypto.randomBytes(4).toString('hex')
    return key
}

module.exports = categoryControllers