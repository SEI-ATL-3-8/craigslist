const models = require('../models');
const categoryController = {}

categoryController.create = async (req, res) => {
    try {
        const category = await models.category.create({
            name: req.body.name
        })
        res.json({ category })
    } catch (error) {
        res.json(error)
    }
}


categoryController.getAll = async (req, res) => {
    try {
        const categories = await models.category.findAll()
        res.json({ categories })
    } catch (error) {
        res.json({ error })
    }
}

categoryController.find = async (req, res) => {
    try {
        const category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({ category })
    } catch (error) {
        res.json({ error })
    }
}


categoryController.update = async (req, res) => {

    try {
        const categoryToUpdate = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        const category = await categoryToUpdate.update(req.body)
        res.json({ category })

    } catch (error) {
        res.json({ error })
    }
}

categoryController.delete = async (req, res) => {
    try {
        const category = await models.category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(category)
    } catch (error) {
        res.json({ error })
    }
}

categoryController.getPosts = async (req, res) => {
    try {
        const category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })

        const posts = await category.getPosts()

        res.json({ posts, category })
    } catch (error) {
        res.json({ error })
    }
}



categoryController.associateWithTag = async (req, res) => {

    try {
        const category = await models.category.findOne({
            where: {
                id: req.params.categoryId
            }
        })

        const tag = await models.tag.findOne({
            where: {
                id: req.params.tagId
            }
        })
        await tag.addTag(category)

        res.json({
            message: 'ok',
            categoryId: category.id,
            tagId: tag.id
        })

    } catch (error) {
        res.json({ error })
    }
}


categoryController.post = async (req, res) => {
    const category = await models.category.findOne({
        where: {
            id: req.params.id
        }
    })
    const post = await models.post.create({
        name: req.body.name
    })

    res.json({ category, post })

}


module.exports = categoryController