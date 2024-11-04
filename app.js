require('dotenv').config();
//console.log(process.env.PORT);
const HOST = process.env.HOST;  //using pack dotenv to read vars in file .env
const PORT = process.env.PORT;

const express = require('express');
const app = express();

const PostsRouter = require('./routers/posts.js');

app.use(express.json()); //req with body json -> obj js accessible with "req.body"

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get('/',(req,res)=>{
    res.send('Main Page');
});
app.use('/:slug',PostsRouter);  //.use create a middleware 
//:slug is rotta dinamica i.e /some-value or also /another-example

