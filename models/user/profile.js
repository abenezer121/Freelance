const db = require('./user')
const bcrypt = require('bcrypt');
var express         = require('express'),
    app             = express(),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local').Strategy,
    bodyParser      = require('body-parser'),
    session         = require('express-session');


exports.updateprofilefreelancer = (userid) =>{
db.findOneAndUpdate({ "_id": userid }, { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}).exec(function(err, book){
   if(err)
   {
       console.log(err);
       res.status(100).send("error in db");
   }
   else
   {
           console.log("updated")
           res.status(200).send("updated");
   }
});

}

exports.updateprofileclient = (userid) =>{

        db.findOneAndUpdate({ "_id": userid }, { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}).exec(function(err, book){
           if(err)
           {
               console.log(err);
               res.status(100).send("error in db");
           }
           else
           {
                   console.log("updated")
                   res.status(200).send("updated");
           }
        });
}
