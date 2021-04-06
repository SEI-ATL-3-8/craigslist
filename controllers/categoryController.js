const models = require('../models')
const tag = require('../models/tag')

const categoryController ={}

categoryController.getAll = async (req, res) => {
    try {
        let categories = await models.category.findAll()
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

categoryController.find = async (req,res) => {
    try {
        let oneCategory = await models.category.findOne({
            where: {
                id: req.params.id
            }
        }) 
        
        res.json({
            oneCategory
        })  
    } catch (error) {
        res.json({error})
    }
}

categoryController.associateWithPost = async (req,res) => {
    try {
        const post = await models.post.findOne({
            id:req.params.postId
        })

        const category = await models.category.findOne({
            where: {
                id: req.params.categoryId
            }
        })
        await category.addPost(post)
        res.json({categoryId,postId})
    } catch (error) {
        res.json({error})
    }
}

categoryController.create = async (req, res) => {
    try {
        let newCategory = await models.category.create({
            name: req.body.name
        })
        res.json({newCategory})
    } catch (error) {
        res.json({error})
    }
}

categoryController.find = async (req, res) => {
    try {
        let oneCategory = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        let allPosts = await models.category.findAll()
        oneCategory.getPosts()
        res.json({oneCategory, allPosts})
    } catch (error) {
        res.json({error})
    }
}


categoryController.update = async (req, res) =>{
    try {
        let updates = req.body
        let categoryUpdate = await models.post.findOne({
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

categoryController.delete = async(req,res) => {
    try {
        let category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        let posts = await post.getPosts()
        for(let post of posts) {
            await post.destroy()
        }

        let deletedCategory = await category.destroy()

        res.json({deletedCategory})
    } catch (error) {
        res.json({error})
    }
}

categoryController.post = async (req,res) => {
    let category = await models.category.findOne({
        where: {
            id: req.params.id
        }
    })

    let post = await models.post.create({
        title: req.body.title,
        description: req.body.description
    })
   
    category.addPost(post)
    
    res.json({category, post 
    })

}


module.exports = categoryController;