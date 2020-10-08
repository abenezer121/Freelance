

const db = require('./../../models/user/user')
const functionality = require('./../../models/user/userfunctionality')
const profile = require('./../../models/user/profile')

const passport = require('passport');
require('./../passport/passport');

exports.signupfreelancer = (req , res) => {
  const {email , password , phone , username , city , LastName , FirstName , skill} = req.body;
  if (!email || !password || !phone || !username || !city || !LastName || !FirstName){ res.send({status : 401 , message : "Please fill the boxes" }) }
  else { functionality.registerfreelance(password , email , phone , username , city , LastName , FirstName , skill)}
}




exports.login = (req, res, next) => {
    const {username , password , phone , email} = req.body;
    if(!username || !password ) { res.send ( { status : 201, message : "fill the box" }) }
    else {
            passport.authenticate('local-login', {
                successRedirect : '/content',
                failureRedirect : '/fail', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            })(req, res, next);
        }
};


exports.populateuser = (req , res) => {
        functionality.populateuser(req.body.id);
}

exports.registerclient = (req  , res ) => {
          const {email , password , phone , username , city , LastName , FirstName , Cname , detail , address} = req.body;
          if (!email || !password || !phone || !username || !city || !LastName || !FirstName ) { res.send ( { status : 401 , message : "Please fill the boxes" } )}
          else {  functionality.registercustomer(email , password , phone , username , city , LastName , FirstName , Cname , detail , address); }
  }


  exports.updateprofilefreelancer = (req , res) => { profile.updateprofilefreelancer(req.body.id , req.body.city , req.body.phone , req.body.email , req.body.password , req.body.skill); }
  exports.updateprofileclient = (req , res) => { profile.updateprofileclient(req.body.id , req.body.city , req.body.phone , req.body.email , req.body.password , req.body.address) }





exports.logout = (req , res) => { req.logout(); }
