const tagController = require('../controllers/tagController')

const express = require('express')

tagController.associateWithPost = async (req, res) => {
    try {
      const tag = await models.tag.findOne({
        where: {
          id: req.params.tagId
        }
      })
  
      const post = await models.post.findOne({
        where: {
          id: req.params.postId
        }
      })
    
      await tag.addPost(post)
    
      res.json({
        message: 'ok',
        topicId: tag.id,
        postId: post.id
      })
  
    } catch (error) {
      res.json({error})
    }
  }
module.exports = tagController