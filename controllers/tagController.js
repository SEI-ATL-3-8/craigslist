const tagController = require('../controllers/tagController')

const express = require('express')

tagController.getPosts = async (req, res) => {
    try {
        const tag = await models.tag.findOne({
        where: {
            id: req.params.id
        }
        })

        const posts = await tag.getPosts()

        res.json({posts, tag})
    } catch (error) {
        res.json({error})
    }

}


tagController.getAll = async (req,res) => {
    try {
        let tags = await models.tag.findAll()
        res.json({
            tags
        }) 
    } catch (error) {
        res.json({error})
    }
}
module.exports = tagController