const models = require('../models')

const categoriesController = {}

categoriesController.getAll = async (req, res) => {
    try {
        let allCats = await models.category.findAll()
        res.json({ allCats })
    } catch (error) {
        res.json({ error })
    }
}


categoriesController.getOne = async (req, res) => {
    try {
        let oneCat = await models.category.findOne({
            where:{
                id: req.params.id
            }
        })
        res.json({oneCat})
    } catch (error) {
        res.json({error})
    }
}

categoriesController.createPost = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = categoriesController