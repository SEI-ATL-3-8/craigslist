const models = require('../models');

const postController = {}

postController.getAllTags = async (req,res) => {
    try {
     const post = await models.post.findOne({
         where:{
             id: req.params.id
         }
     })
     const tags = await post.getTags()
     res.json({tags});
    } catch (error) {
        res.json({error})
    }
 }


module.exports = postController;