const express = require('express')
const app = express()
const rowdy = require('rowdy-logger') //for rowdy-logger
const routesReport = rowdy.begin(app)//for rowdy-logger
app.use(express.json())//allow for use of req.body

//listen on port 3000
app.listen(3000, () => {
  console.log('the server is listening!')
	routesReport.print()
})

//import models
const models = require('./models')

//1. A user can get a list of all existing categories (GET /categories)
//controller:
const getCategories = async (req, res) => {
	try{
		let allCategories = await models.category.findAll()
		res.json({allCategories})
	}catch(error){
		res.json({error})
	}
}
//route:
app.get('/categories', getCategories)
 
//2. A user can get info on a single existing category (GET /categories/:id)
//controller:
const findCategory = async (req, res) => {
	try{
		let foundCat = await models.category.findOne({
			where: {
				id: req.params.id
			}
		})
		res.json({foundCat})
	}catch(error){
		res.json({error})
	}
}
//route:
app.get('/categories/:id', findCategory)
 
//3. A user can create a new post inside an existing 
		//category(POST /categories/:id/posts)
//controller:
const createPostinCategory = async (req, res) => {
	try{
		console.log("in try")
		console.log(req.body)
		let newPost = await models.post.create({
			title: req.body.title,
			description: req.body.description,
			author: req.body.author,
			categoryId: req.params.id,
			tagIds: []
		})
		res.json({newPost})
	}catch(error){
		console.log(error)
		res.json({error})
	}
}
//route:
app.post('/categories/:id/posts', createPostinCategory)
 
//4. A user can see a list of all posts inside an 
		//existing category (GET /categories/:id/posts)
//controller:
const getPostsInCategory = async (req, res) => {
	try{
		let allPosts = await models.post.findAll({
			where: {
				categoryId: req.params.id
			}
		})
		res.json({allPosts})
	}catch(error){
		res.json({error})
	}
}
//route:
app.get('/categories/:id/posts', getPostsInCategory)
 
//5. A user can see a list of existing tags(GET /tags)
//controller:
const getAllTags = async (req, res) => {
	try{
		let allTags = await models.tag.findAll()
		res.json({allTags})
	}catch(error){
		res.json({error})
	}
}
//route:
app.get('/tags', getAllTags)
 
//6. A user can associate an existing category with an 
		//existing tag (PUT /categories/:categoryId/tags/:tagId
//controller:
const addTagToCategory = async (req, res) => {
	try{
		let myCategory = await models.category.findOne({
			where: {
				id: req.params.categoryId
			}
		})
		let newTagIds = []
		//copy the tagIds array from the current category over to newTagIds
		for(tag of myCategory.dataValues.tagIds){
			newTagIds.push(tag)
		}
		//add the new tag to the newTagIds array
		newTagIds.push(req.params.tagId)
		//update the category with the newTagIds array
		let changedCat = await myCategory.update({
			tagIds: newTagIds
		})
		res.json({changedCat})
	}catch (error){
		res.json({error})
	}
}
//route:
app.put('/categories/:categoryId/tags/:tagId', addTagToCategory)
 
//7.A user can see a list of all posts that are 
		//associated with a tag (GET /tags/:id/posts)
//controller:
const getPostsFromTag = async (req, res) => {
	try{
		//get every post
		let allPosts = await models.post.findAll()
 
		let taggedPosts = []
 
		//for every post if its tagIds array includes the tag id in the req
			//add that post to taggedPosts (inefficient cause I didnt set 
				//up my associations correctly)
		for(post of allPosts){
			if(post.dataValues.tagIds.includes(parseInt(req.params.id))){
				taggedPosts.push(post)
			}
		}
		res.json({taggedPosts})
	}catch(error){
		console.log(error)
		res.json({error})
	}
}
//route:
app.get('/tags/:id/posts', getPostsFromTag)
 
//8. A user can see a list of all tags that are 
	//associated with a post (GET /posts/:id/tags)
//controller:
const getPostTags = async (req, res) => {
	try{
		let myPost = await models.post.findOne({
			where: {
				id: req.params.id
			}
		})
		let tags = []
		for(tagId in myPost.dataValues.tagIds){
			let foundTag = await models.tag.findOne({
				where: {
					id: tagId
				}
			})
			if(foundTag != null){
				tags.push(foundTag)
			}
		}
		res.json({tags})
	}catch(error){
		console.log(error)
		res.json({error})
	}
}
//route:
app.get('/posts/:id/tags', getPostTags)
