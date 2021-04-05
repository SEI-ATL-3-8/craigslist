const models = require('../models')

const postController = {}

postController.getAll = async (req,res) => {
    try {
        let posts = await models.post.findAll()
        res.json({
            posts
        }) 
    } catch (error) {
        res.json({error})
    }
}
postController.findOne = async (req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let comments = await post.getComments()
        res.json({
            post, comments
        })  
    } catch (error) {
        res.json({error})
    }
}

postController.create = async (req,res) => {
    try {
        let post = await models.post.create({
            title: req.body.title,
            description: req.body.description
        })
        res.json({
            post
        })
    } catch (error) {
        res.json({error})
    }
}

postController.update = async (req,res) => {
    
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let updates = await post.update(req.body)
        res.json({updates})
    } catch (error) {
        res.json({error})
    }
}

postController.delete = async(req,res) => {
    try {
        let post = await models.post.findOne({
            where: {
                id: req.params.id
            }
        })
        let comments = await post.getComments()
        for(let comment of comments) {
            await comment.destroy()
        }

        let deletedPost = await post.destroy()

        res.json({deletedPost})
    } catch (error) {
        res.json({error})
    }
}

postController.tag = async (req,res) => {
    let post = await models.post.findOne({
        where: {
            id: req.params.id
        }
    })
    let tag = await models.tag.create({
        tagName: req.body.tagName
    })
    post.addTag(tag)
    res.json({post, tag
    })

}
postController.category = async (req,res) => {
    let post = await models.post.findOne({
        where: {
            id: req.params.id
        }
    })
    let cat = await models.category.create({
        name: req.body.name
    })
    post.addCategory(cat)
    res.json({post, cat
    })

}
postController.getTags = async (req, res) => {
    try {
        const post = await models.post.findOne({
        where: {
            id: req.params.id
        }
        })

        const tags = await post.getTags()

        res.json({posts, tags})
    } catch (error) {
        res.json({error})
    }

}
module.exports = postController