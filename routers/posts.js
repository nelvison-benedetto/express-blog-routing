const express = require('express');
const router = express.Router(); //create another router

const PostController = require('../controllers/PostController.js');
//!Express abbina le rotte in ordine sequenziale (dunque /filter before /:id !)

router.get('/',PostController.index);  //activate when url 3000/something/ 

router.get('/filter', PostController.filterByTag); //mettilo prima di /:id altrimenti filter viene interpretato come /something !

router.get('/:id',PostController.show); //activate when url 3000/something/1(1 or another num) ,find a specific post

router.post('/',PostController.store);
 //to run this:  open PostMan> link http://localhost:3001/something/ , Post + row:json and add a new item> send. now refresh web page


 
module.exports = router;
