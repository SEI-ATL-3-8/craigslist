const models = require('../models')

const tagControllers = {}

tagControllers.getAll = async(req, res) => {

    try {
        let tags = await models.tag.getAll()
        res.json({ tags })
    } catch (error) {
        res.json({ error })
    }

}

tagControllers