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



module.exports = tagController;