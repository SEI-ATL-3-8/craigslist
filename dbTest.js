const models = require('./models')

const testing = async () => {
    let tag = await models.tag.findOne({
        where: {
            id: 4
        }
    })
    let category = await models.category.findOne({
        where: {
            id: 1
        }
    })
    let collection = await models.collection.findOne({
        where: {
            id: 1
        }
    })
    let result = await tag.getCategories()

    console.log(result)
}

testing()