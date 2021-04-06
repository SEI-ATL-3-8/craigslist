const models = require('../models')

const postControllers = {}

postControllers.update = async (req, res) => {
    try {
        const newDetails = req.body
        const post = await models.post.findOne({
            where: {
                key: req.params.key
            }
        })
        const updateDone = post.update(newDetails)
        res.json({updateDone})
    } catch (error) {
        res.json({error})
    }
}

postControllers.destroy = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                key: req.params.key
            }
        })
        const deletedPost = await post.destroy()
        res.json({deletedPost})
    } catch (error) {
        res.json({error})
    }
}

// The below "getTags" doesn't work because tag and category are not associated but my models have the association and the join table (collections) has the categoryId in the same row as the tagId. The console log errors result in the "get" function not being available. I can't figure out what's wrong here.
postControllers.getTags = async (req, res) => {
    try {
        const post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        const category = await post.getCategory()
        const tag = await category.getTag()
        res.json({tag})
    } catch (error) {
        res.json({error})
    }
}




module.exports = postControllers