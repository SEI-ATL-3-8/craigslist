const models = require('../models')

const tagController ={}

tagController.getAll = async (req,res) => {
    const allTag = await models.tag.findAll()
    res.json({allTag})
}

tagController.getPosts = async (req,res) => {
    const oneTag = await models.tag.findOne({
        where: IDBCursor.params.id
    })

    const posts = await models.post.findAll()

    res.json({allTag,posts})
}





module.exports = topicsController