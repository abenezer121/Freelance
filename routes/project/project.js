//add passport auth on get and post

const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const projectcontroller = require('./../../controllers/project/project')

router.post('/createproject' , projectcontroller.createproject)
//router.get('/createproject' , projectcontroller.createproject)
router.post('/updateproject' , projectcontroller.updateproject);
//router.get('/updateproject' , projectcontroller.updateproject);
//router.get('/listprojects' , projectcontroller.listprojects);
router.post('/sortproject' , projectcontroller.search);
router.post('/sort' , projectcontroller.sort);

module.exports = router;
