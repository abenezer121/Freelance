const db = require('./user')
const bcrypt = require('bcrypt');
var express         = require('express'),
    app             = express(),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local').Strategy,
    bodyParser      = require('body-parser'),
    session         = require('express-session');





exports.updateprofilefreelancer = (userid , city , phone , email ,  password  , skill) =>{
        db.findOne({"_id" : userid} , function(err , result) {
                if (err) {res.status(100).send("db error")}
                else
                {
                        if(typeof city !== "undefined") {  result.city = city; }

                        if(typeof phone !== "undefined"){  result.phone = phone; }

                        if(typeof email !== "undefined"){ result.email = email; }

                        if(typeof password !== "undefined"){ result.password = password; }

                        result.save(function(err , success){ if(err){ res.status(100).send("db error")} else {res.status(500).send("success")}})
                }
        })
        .populate('to')
        .exec((err, user) => {
                if(err) { res.status(100).send("populate error") }
                else {
                        if(typeof skill !== "undefined"){ user.skill = skill; }
                        user.save(function(req , res){
                                if(err) {res.status(100).send("populate update error")}
                                else{res.status(500).send("updated successfully")}
                        })
                 }
        });

}
exports.updateprofileclient = (userid , city , phone , email ,  password  ,address  ) =>{
        db.findOne({"_id" : userid} , function(err , result) {
                if (err) {res.status(100).send("db error")}
                else
                {
                        if(typeof city !== "undefined") {  result.city = city; }

                        if(typeof phone !== "undefined"){  result.phone = phone; }

                        if(typeof email !== "undefined"){ result.email = email; }

                        if(typeof password !== "undefined"){ result.password = password; }

                        result.save(function(err , success){ if(err){ res.status(100).send("db error")} else {res.status(500).send("success")}})
                }
        })
        .populate('to')
        .exec((err, user) => {
                if(err) { res.status(100).send("populate error") }
                else {
                        if(typeof address !== "undefined"){ user.address = address; }
                        user.save(function(req , res){
                                if(err) {res.status(100).send("populate update error")}
                                else{res.status(500).send("updated successfully")}
                        })
                 }
        });

}
