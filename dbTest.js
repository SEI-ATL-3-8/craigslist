//Posts can have many tags
//Tags can be attahced to many posts

const models = require('./models')

const testing = async () => {
    let post1 = await models.post.findOne({
        where: {
            title: 'Dinner Table'
        }
    })

    let post2 = await models.post.findOne({
        where: {
            title: 'Chairty Fundraiser for Homeless'
        }
    })

    let post3 = await models.post.findOne({
        where: {
            title: 'Haunted Painting'
        }
    })

    let category1 = await models.category.findOne({
            where: {
               name: 'For Sale' 
            }
    })

    let category2 = await models.category.findOne({
            where: {
               name: 'Community' 
            }
    })

    let category3 = await models.category.findOne({
            where: {
               name: 'Discussion' 
            }
    })

    let tag1 = await models.tag.findOne({
        where: {
            name: 'furniture'
        }

    })

    let tag2 = await models.tag.findOne({
        where: {
            name: 'nonprofit'
        }
    })

    let tag3 = await models.tag.findOne({
        where: {
            name: 'weird stuff'
        }
    })

    // await post1.setCategory(category1)
    // await category2.addPost(post2)

    // let post1Category = await post1.getCategory()
    // console.log(post1Category);

    // let category1post = await category1.getPost()
    // console.log(category1post);

    await post1.addTag(tag1)
    await tag2.addPost(post2)

    let post1Tag = await post1.getTags()
    console.log(post1Tag);

    let tag2post = await post2.getPosts()
    console.log(tag2post);

}
testing();