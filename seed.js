
const models = require('./models')


// const categoryArray = []
// class Category {
//     constructor(name){
//         this.name = name
//         categoryArray.push(this)
//     }
// }

// new Category('For Sale')
// new Category('Community')
// new Category('Discussion')

// categoryArray.forEach(function(category){
//     models.catergory.create(category)
// })


// const tagArray = []
// class Tag {
//     constructor(name){
//         this.name = name
//         tagArray.push(this)
//     }
// }

// new Tag('Best-Of')
// new Tag('Offensive')
// new Tag('Funny')
// new Tag('Random')

// tagArray.forEach(function(tag){
//     models.tag.create(tag)
// })

const postArray = []
class Post {
    constructor(title,description,catergoryId){
        this.title = title,
        this.description = description,
        this.catergoryId = catergoryId
        postArray.push(this)
    }
}

new Post("My Post", "lalallala this is a post",1);
new Post("My other post","anotha one",2);
new Post( "Uno mas", "postyyyy post post",3);

postArray.forEach(function(p){
    models.post.create(p)
})