const express = require('express');
const router = express.Router();

//import controller
const projectController = require ('../controllers/projectController');

module.exports = function() {

    router.get('/', projectController.projectHome);  
    
    router.get('/we', projectController.projectWe);  
    return router;
}