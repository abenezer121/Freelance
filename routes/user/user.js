//add passport auth on get and post


const express = require('express')
const usercontroller = require('./../../controllers/user/user')
const profile = require('./../../models/user/profile')
var router  = express.Router();


router.post('/registerfreelance' , usercontroller.signupfreelancer);
//router.get('/registerfreelance' , usercontroller.signupfreelancerget);

router.post('/login' ,usercontroller.login);
//router.get('/login' ,usercontroller.loginget);

router.post('/registerclient' , usercontroller.registerclient);
//router.get('/registerclient' , usercontroller.registerclientget);

router.get('/logout' , usercontroller.logout);

router.get('/content' , function(req , res){ console.log("welcome") })
router.get('/fail' , function(req , res){ console.log("fail") })

router.post('/updateprofilefreelancer' , profile.updateprofilefreelancer);
//router.get('/updateprofilefreelancer' , profile.updateprofilefreelancerget);

router.post('/updateprofileclient' , profile.updateprofileclient);
//router.get('/updateprofileclient' , profile.updateprofileclientget);


module.exports = router;