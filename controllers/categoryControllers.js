const models = require('../models')
const category = require('../models/category')

const categoryControllers = {}

categoryControllers.getAll = async (req, res) => {
    try{
        const allCategory = await models.category.findAll()
        res.json({allCategory})
    }catch (error) {
        res.json({error})
    }
}

categoryControllers.getOne = async (req, res) => {
    try{
        const oneCategory = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })

        let newPost = await models.post.create({
            title: req.body.title,
            description: req.body.description
        })

        oneCategory.addPost(newPost)
        
        res.json({oneCategory, newPost})

    }catch (error) {
        console.log(error);
        res.json({error})
    }
}

categoryControllers.allPosts = async (req, res) => {
    try{
        const category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        
        const posts = await category.getPosts()
        res.json({category, posts})

    }catch (error) {
        console.log(error);
        res.json({error})
    }
}

module.exports = categoryControllers