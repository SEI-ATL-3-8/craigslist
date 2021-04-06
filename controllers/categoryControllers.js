const models = require('../models')

const categoryControllers = {}

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






module.exports = categoryControllers