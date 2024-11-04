const posts = require('../db/posts.js');
const fs = require('fs');

//REQ E RES sono vars gestite da Express, a cui vengono passate req(la richiesta del client)
//e res(la risposta che il server costruisce per il client) e vengono passate quando viene chiesta una specifica rotta
const index = (req,res)=>{  //this is a function assigned to a const
    const responseData = { //create obj js
        data : posts,
        counter : posts.length
    }
    res.status(200).json(responseData);  //success(only the client sees it) + convert in json the res
    //JSON is the standart for exchange info between API web
}

const show = (req,res) =>{
    console.log(req);
    const post = posts.find((item,index)=> item.id === Number(req.params.id));
     //Number assicura che sia un num
    if(!post){
        return res.status(404).json({
            error : '404! Not Found'  //.json convert this obj js in json and edit the res header dicendo che i dati sono in formato json
        })
    }
    return res.status(200).json({
        data : post
    })
}

const store = (req,res) =>{
    console.log(req.body);  //print the data in the body of the req
    const post = {
        id : posts[posts.length-1].id+1,
        title : req.body.title,
        slug : req.body.slug,
        content : req.body.content,
        image : req.body.image,
        tags : req.body.tags,
    }
    posts.push(post);
    fs.writeFileSync('../db/posts.js',`module.exports = ${JSON.stringify(posts,null,4)}`);
     //fs.writeFileSync is Nodejs per sovrascrivere dati, blocca l'esecuzione del codice finche la sovrascrittura su file non è finita
     //prende come params il file da sovrascrivere +il contenuto da sovrascrivere
     //module.exports =  equivale al module.exports = posts; alla fine del file posts.js in db, perche writeFileSync riscrive tutto il file!
     //JSON.stringify converte in stringa json, con params l'array + null(tutte le proprita)+4(indentation spaces i.e. []no spaces {}interno ha 4 spazi verso dx)
     res.json({
        status : 201,
        data : posts,
        counter : posts.length
    });
}

module.exports = {
    index,
    show,
    store
}