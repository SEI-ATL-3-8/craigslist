const models = require('./models')

const add = async () => {
  await models.category.findOrCreate({
    where: {
      name: 'For Sale'
    }
  })
  
  await models.category.findOrCreate({
    where: {
      name: 'Community Discussion'
    }
  })
  
  const forSale = await models.category.findOne({
    where: {
      name: 'For Sale'
    }
  })
  
  const newPost = await models.post.create({
    title: 'clippers',
    content: 'never used, $100'
  })
  
  await forSale.addPost(newPost)

  const forSalePosts = await forSale.getPosts()
  console.log(forSalePosts);

  await models.tag.findOrCreate({
    where: {
      name: 'Best-Of'
    }
  })

  const tag = await models.tag.findOne({
    where: {
      name: 'Best-Of'
    }
  })

  const post = await models.post.findOne({
    where: {
      title: 'lawnmower'
    }
  })


}

add()