const posts = require('../db/posts.js');

const index = (req,res)=>{
    const responseData = {
        data : posts,
        counter : posts.length
    }
    res.status(200).json(responseData);
}

const show = (req,res) =>{
    console.log(req);
    const post = posts.find(post=>post.id === Number(req.params.id));

    if(!post){
        return res.status(404).json({
            error : '404! Not Found'
        })
    }
    return res.status(200).json({
        data : user
    })
}

module.exports = {
    index,
    show
}