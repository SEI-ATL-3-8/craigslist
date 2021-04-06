const models = require('./models')
const { category, hashtag, post, tag } = models
const Op = require('sequelize').Op

// NOT WORKING
const testing = async () => {
    try {
        // find categories
        const category1 = await category.findOne({where: {name: {[Op.iLike]: '%for sale%'}}})
        const category2 = await category.findOne({where: {name: {[Op.iLike]: '%community%'}}})
        const category3 = await category.findOne({where: {name: {[Op.iLike]: '%Discussion%'}}})
        const category4 = await category.findOne({where: {name: {[Op.iLike]: '%free%'}}})
        
        //find posts
        const post1 = await post.findOne({where: {title: {[Op.iLike]: '%boat%'}}})
        const post2 = await post.findOne({where: {title: {[Op.iLike]: '%couch%'}}})
        const post3 = await post.findOne({where: {title: {[Op.iLike]: '%lamp%'}}})
        const post4 = await post.findOne({where: {title: {[Op.iLike]: '%tv%'}}})
        
        //find tags
        const tag1 = await tag.findOne({where: {name: {[Op.iLike]: '%best-of%'}}})
        const tag2 = await tag.findOne({where: {name: {[Op.iLike]: '%offensive%'}}})
        const tag3 = await tag.findOne({where: {name: {[Op.iLike]: '%waist your time%'}}})

        // testing posts one-to-many categories association
        console.log(post1,post2,post3,post4)
        // const test1 = post1.set(category1)
        // const test2 = post1.set(category1)

        // testing posts many-to-many tags association


    } catch (error) {
        console.log('ERROR', error);
    } 
}
// testing()