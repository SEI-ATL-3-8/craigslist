const models = require('../models')

const postController = {}

postController.getAll = async (req ,res) => {
    try {
        let posts = await models.post.findAll()
        res.json({posts}) //culry braces  
    } catch (error) {
        res.json({error})
    }
}

postController.find = async (req, res) => {
    try {
        let post = await models.post.findOne({

            where: {
                id: req.params.id
            }
        })
        res.json({category})
    } catch (error) {
        res.json({error})
    }
}

postController.create = async (req, res) => {
    try {
        let newPost = await models.post.create({
            title: req.body.title,
            description: req.body.description,
            categoryId: req.body.categoryId

        })
        res.json({newPost})
    } catch (error) {
        res.json({error})
    }
}

postController.update = async (req, res) =>{
    try {
        let updates = req.body
        let postUpdate = await models.post.findOne({
            where:{
                id:req.params.id
            }
        })
        let finalStep = await postUpdate.update(updates)
        res.json({finalStep})
    } catch (error) {
        res.json({error})
    }
}

postController.delete = async (req, res) => {
    try {
        let deleteOnepost = await models.post.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({deleteOnePost})
    } catch (error) {
        res.json({error})
    }
}

module.exports = postController;