const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController.js');
router.get('/',PostController.index);
router.get('/',PostController.show);

module.exports = router;
