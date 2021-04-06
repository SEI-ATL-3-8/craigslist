const models = require('./models')

const testing = async () => {
    await models.category.findOrCreate({
        where: {
            name: 'For Sale'
        }
    })
    await models.category.findOrCreate({
        where: {
            name: 'Missed Connection'
        }
    })
    await models.category.findOrCreate({
        where: {
            name: 'Free S**t'
        }
    })
    await models.tag.findOrCreate({
        where: {
            name: 'Cool Items'
        }
    })
    await models.tag.findOrCreate({
        where: {
            name: 'How Romantic'
        }
    })
    await models.tag.findOrCreate({
        where: {
            name: 'One of a Kind'
        }
    })

}


testing()