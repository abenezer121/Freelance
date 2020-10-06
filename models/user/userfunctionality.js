const db = require('./user')
const bcrypt = require('bcrypt');
var express         = require('express'),
    app             = express(),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local').Strategy,
    bodyParser      = require('body-parser'),
    session         = require('express-session');


exports.registerfreelance =  (password , email , phone , username , city , LastName , FirstName , skill) => {
  if(!skill) { skill = []; }
  //save in the general user schema
  const User = new db.User();
  User.email = email;
  User.phone = phone;
  User.username = username;
  User.city = city;
  User.chat = [];
  User.LastName = LastName;
  User.FirstName = FirstName;

  //hash the password before storin
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
  User.password = hash;
  User.save(function(err,result){
   if(err) { console.log(err)}//res.send ( { status : 100 , message : "Db error"})}
   else {
                  const Freelancer = new db.Freelancer();
                  Freelancer.user = result._id;
                  Freelancer.skill = skill;
                  Freelancer.workingon = [];
                  Freelancer.workedon = [];

                  User.type = "Freelancer"
                  Freelancer.rating = 0.0;
                  Freelancer.save(function(err , res)
                  {

                    if(err) {  res.send ( { status : 101 , message : "Db error"})} //}
                    else {
                             db.User.updateOne({ _id: result._id }, { to : res._id } , function(err , res1){
                                    if(err) { res.send ( { status : 100 , message : "db error" } ) }
                                    else { res.send ( { status : 500 , message : "registered" } ) }
                            });
                         }
                  })
            }
          })
      });
  });

}


exports.registerclient = (email , password , phone , username , city , LastName , FirstName , Cname , detail , address) => {
        const User = new db.User();
        User.email = email;
        User.phone = phone;
        User.username = username;
        User.city = city;
        User.chat = [];
        User.LastName = LastName;
        User.type = "Clients";
        User.FirstName = FirstName;
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {

                User.password = hash;
                User.save(function(err,result)
                {
                         if(err) { res.send( { status : 100 ,message : "Db error"}) }
                         else
                         {
                           const customer = new db.Client();
                           customer.Cname = Cname;
                           customer.detail = detail;
                           customer.address = address;
                           customer.user = result._id;
                           customer.save(function(err , result){
                               if(err) { res.send ( { status : 100 , message : "Db error" })}
                               else {
                                       db.User.updateOne({ _id: result._id }, { to : res._id } , function(err , res1){
                                              if(err) { res.send ( { status : 100 , message : "db error" } ) }
                                              else { res.send ( { status : 500 , message : "registered" } ) }
                                      });
                                    }
                           })
                         }
               })

              })
            })
}
