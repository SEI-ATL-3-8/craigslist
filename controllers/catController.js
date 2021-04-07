const models = require('../models')

const catController = {}

catController.getAll = async (req, res) => {
    try {
        let categories = await models.category.findAll()
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

catController.findOne = async (req, res) => {
    try {
        let oneCategory = await models.category.findOne({
            where: {
                id: req.param.id
            }
        })
        res.json({oneCategory})
    } catch (error) {
        res.json({error})
    }
}




module.exports = catController