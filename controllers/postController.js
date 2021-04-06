const models = require('../models');
const postController = {}

postController.create = async (req, res) => {
    try {
        const post = await models.post.create({
            name: req.body.name
        })
        res.json({ post })
    } catch (error) {
        res.json(error)
    }
}


postController.getAll = async (req, res) => {
    try {
        const categories = await models.post.findAll()
        res.json({ categories })
    } catch (error) {
        res.json({ error })
    }
}

postController.find = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({ post })
    } catch (error) {
        res.json({ error })
    }
}


postController.update = async (req, res) => {

    try {
        const postToUpdate = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        const post = await postToUpdate.update(req.body)
        res.json({ post })

    } catch (error) {
        res.json({ error })
    }
}

postController.delete = async (req, res) => {
    try {
        const post = await models.post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(post)
    } catch (error) {
        res.json({ error })
    }
}


module.exports = postController