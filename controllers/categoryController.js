const models = require('../models')

const categoryController = {}

categoryController.getAll = async (rep,res) => {
    const allCategoty = await models.category.findAll()
    res.json({allCategoty})
}

categoryController.getOne = async (rep,res) => {
    const oneCategory = await models.category.findOne({
        where: require.params.id
    })
    res.json({oneCategory})
}


module.exports = categoryController