const models = require('../models')

const categoryController = {}

categoryController.getAll = async(req, res) => {
    try {
        let category = await models.category.getAll()
        res.json({ category })
    } catch (error) {
        res.json({ error })
    }
}


categoryController.getOne = async(req, res) => {
    try {
        let oneCategory = await models.category.getOne({
            where: ({
                id: req.params.id
            })
        })
        res.json(oneCategory)
    } catch (error) {
        res.json({ error })
    }
}


categoryController.create = async(req, res) => {
    try {
        let oneCategory = await models.category.getOne({
            where: ({
                id: req.params.id
            })
        })
        let post = await models.post.create({
            where: { name: req.body.name }
        })
        const newPost = await category.addPost(post)
        res.json({ newPost })
    } catch (error) {
        res.json({ error })
    }
}

categoryController.update = async(req, res) => {
    try {
        let oneCategory = await models.category.getOne({
            where: {
                id: req.params.id
            }
        })
        let allPost = await oneCategory.getAll()
        res.json({ allPost, })

    } catch (error) {

    }
}

categoryController.getAll = async(req, res) => {
    try {
        let getCategory = await models.category.getOne({
            where: { id: req.params.id }
        })
        let allPost = await getCategory.getPost()
        res.json({ getCategory, allPost })
    } catch (error) {

    }


}


















module.exports = categoryController