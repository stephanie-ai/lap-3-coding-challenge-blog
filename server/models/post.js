const db = require('../db/config');
const SQL = require("sql-template-strings");

class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.story = data.story;
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try{
                const postData = await db.run(SQL`SELECT * FROM postdb;`)
                const posts = postData.rows.map(p => new Post(p))
                resolve(posts)
            }catch (err){
                reject("Error retrieving posts");
            }
        })
    }

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try{
                let postData = await db.run(SQL`SELECT * FROM postdb WHERE id = ${id};`);
                let post = new Post(postData.rows[0]);
                resolve(post);
            }catch(err){
                reject("Post is not found");
            }
        })
    }

    static create(title, name, story){
        return new Promise (async (resolve, reject) => {
            try{
                let postData = await db.run(SQL`INSERT INTO postdb (title, name, story)
                                                VALUES (
                                                    ${title},
                                                    ${name},
                                                    ${story}
                                                ) RETURNING *;`);
                let newPost = new Post(postData.rows[0]);
                resolve(newPost)                           
            }catch(err){
                reject('Error entering post')
            }
        })
    }
}

module.exports = Post;