const models = require('../models');
const tagController = {}

tagController.create = async (req, res) => {
    try {
        const tag = await models.tag.create({
            name: req.body.name
        })
        res.json({ tag })
    } catch (error) {
        res.json(error)
    }
}


tagController.getAll = async (req, res) => {
    try {
        const categories = await models.tag.findAll()
        res.json({ categories })
    } catch (error) {
        res.json({ error })
    }
}

tagController.find = async (req, res) => {
    try {
        const tag = await models.tag.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({ tag })
    } catch (error) {
        res.json({ error })
    }
}


tagController.update = async (req, res) => {

    try {
        const tagToUpdate = await models.tag.findOne({
            where: {
                id: req.params.id
            }
        })
        const tag = await tagToUpdate.update(req.body)
        res.json({ tag })

    } catch (error) {
        res.json({ error })
    }
}

tagController.delete = async (req, res) => {
    try {
        const tag = await models.tag.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(tag)
    } catch (error) {
        res.json({ error })
    }
}


module.exports = tagController