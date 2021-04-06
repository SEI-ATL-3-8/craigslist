const { tag } = require('./../models');

const tagController = {};

tagController.getAllTags = async (req,res) => {
    try {   
        const allTags = await tag.findAll();
        res.json({
            tags: allTags
        });
    }
    catch(error) {
        res.json(error);
    }
};

tagController.getTagPosts = async (req, res) => {
    try {
       
        const oneTag = await tag.findOne({where: {
            id: req.params.id
        }});
        
        const allCategories = await oneTag.getCategories();
        let allPosts = [];

        for (let c of allCategories) {
            allPosts = [...await c.getPosts(),...allPosts];
        }

        res.json({
            posts: allPosts
        });

    }
    
    catch(error) {
        res.send(error.messaege);
    }
};      



module.exports = tagController;