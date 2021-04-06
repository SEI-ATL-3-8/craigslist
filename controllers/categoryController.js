const models = require('../models')

const categoryController = {}

categoryController.getAllCats = async (req, res) => {
    try {
        let categories = await models.category.findAll()
        res.json({categories})
    } catch (error) {
        res.json({error})
    }
}

categoryController.getOneCat = async (req, res) => {
    try {
        let category = await models.category.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({category})
    } catch (error) {
        res.json({error})
    }
}

categoryController.createPostCat = async (req, res) => {
    try {
    const category = await models.category.findOne({
        where: {
            id: req.params.id
        }
    })
    const post = await models.post.create({
            title: req.body.title,
            body: req.body.body
    })
    await category.addPost(post)
    res.json({post, category})
    } catch (error) {
        res.json({error})
    }
}

categoryController.getPostCat = async (req, res) => {
    try {
    const category = await models.category.findOne({
        where: {
            id: req.params.id
        }
    })
    const allPosts = await category.getPosts()
    res.json({allPosts})
    } catch (error) {
        res.json({error})
    }
}

categoryController.associateWithTag = async (req, res) => {
    try {
    const category = await models.category.findOne({
        where: {
            id: req.params.categoryId
        }
    })
    const tag = await models.tag.findOne({
        where: {
            id: req.params.tagId
        }
    })

    await category.addTag(tag)

    res.json({message: 'ok', 
              categoryId: category.id,
              tagId: tag.id
            })
    } catch (error) {
            res.json({error})
    }
}



// postController.createPost = async (req,res) => {
//     try {
//     let newPost = await models.post.create({
//         title: req.body.title,
//         description: req.body.description
//     })
//     res.json({newPost})
// } catch (error) {
//     res.json({error})
//     }
// }

module.exports = categoryController