require('dotenv').config();
//console.log(process.env.PORT);

const express = require('express');
const app = express();

const PostsRouter = require('./routers/posts.js');

app.use(express.json());

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get('/',(req,res)=>{
    res.send('Main Page');
});
app.use('/:slug',PostsRouter);