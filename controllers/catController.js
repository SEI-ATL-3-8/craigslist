const catController = require('../controllers/catController')

const express = require('express')


catController.getAll = async (req,res) => {
    try {
        let cats = await models.category.findAll()
        res.json({
            cats
        }) 
    } catch (error) {
        res.json({error})
    }
}
catController.findOne = async (req,res) => {
    try {
        let post = await models.category.findOne({
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

module.exports = catController