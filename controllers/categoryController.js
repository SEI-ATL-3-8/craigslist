const models = require('../models')

const categoryController = {}


categoryController.allCategories = async (req, res) => {
    try {
        const category = await models.category.findAll()
        res.json({category})
    } catch (error) {
        res.json({error})
    }
}

categoryController.categoryById = async (req, res) => {
    try {
        const category = models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({category})
    } catch (error) {
        res.json({error})
    }
}

categoryController.createCategory = async (req, res) => {
    try {
        const category = models.category.create({
            name: req.body.name,
        })
        res.json({category})
    } catch (error) {
        res.json({error})
    }
}


module.exports = categoryController