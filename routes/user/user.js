//add passport auth on get and post


const express = require('express')
const usercontroller = require('./../../controllers/user/user')
const path = require('path')
var router  = express.Router();


router.post('/registerfreelance' , usercontroller.signupfreelancer);
//router.get('/registerfreelance' , usercontroller.signupfreelancerget);

router.post('/populateuser' , usercontroller.populateuser);

router.post('/login' ,usercontroller.login);
//router.get('/login' ,usercontroller.loginget);

router.post('/registerclient' , usercontroller.registerclient);
//router.get('/registerclient' , usercontroller.registerclientget);

router.get('/logout' , usercontroller.logout);

router.get('/content' , function(req , res){
                console.log(req.user)
                res.sendFile(path.join(__dirname+'/main.html'));
        })
router.get('/fail' , function(req , res){ console.log("req.message") })

router.post('/updateprofilefreelancer' , usercontroller.updateprofilefreelancer);
//router.get('/updateprofilefreelancer' , profile.updateprofilefreelancerget);

router.post('/updateprofileclient' , usercontroller.updateprofileclient);
//router.get('/updateprofileclient' , profile.updateprofileclientget);



module.exports = router;
