const { post } = require('./../models');

const postController = {};

postController.getPostTag = async (req,res) => {

    try {
        const { id } = req.params;
        const onePost = await post.findOne({where:{ id}});
        const oneCategory = await onePost.getCategory();
        const tags = await oneCategory.getTags();

        res.json({
            tags
        });
    }

    catch(error) {
        res.json(error);

    }
  


}



module.exports = postController;