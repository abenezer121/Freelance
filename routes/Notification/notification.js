//add passport auth on get and post
const express = require('express')
var router  = express.Router();
const notification = require('./../../controllers/notification/notification')


router.post('/getnotification' ,  notification.getnotification);
router.post('/setnotification' , notification.setnotification);

//router.get('/getnotification' ,  notification.getnotification);
//router.get('/setnotification' , notification.setnotification);

module.exports = router;
