const models = require('../models')
const category = require("../models/category");
const categoryController = {}

categoryController.getAll = async (req, res) => {
    try {
        let categories = await models.category.findAll()
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

categoryController.findOne = async (req, res) => {
    try {
        let category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

categoryController.create = async (req, res) => {
    try {
        let category = await models.category.create({
            title: req.body.title,
            description: req.body.description
        })
        res.json({category})
    } catch (error) {
        res.json({error})
    }
}

module.exports = categoryController