var express         = require('express'),
    app             = express(),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local').Strategy,
    bodyParser      = require('body-parser'),
    session         = require('express-session');
const db = require('./../../models/user/user')
const bcrypt = require('bcrypt');
const functionality = require('./../../models/user/userfunctionality')
passport.use('local-login', new LocalStrategy({
   usernameField: 'username',
   passwordField: 'password',
   passReqToCallback : true,
   session: false
}, function (req , username, password  , done) {
        db.User.findOne({ $or: [{ email: username }, { phone: username }, { username: username }] }, function (err, user) {
        if (err) {   done(null, false, { message: 'Db error' }); }
        if (!user) { done(null, false, { message: 'Incorrect username.' }); }
        bcrypt.compare(password, user.password, function(err, matches) {
                if (err) { return done(null, false, { message: 'Server error' }); }
                else if (matches) { }
                else { return done(null, false, { message: 'Incorrect password' }); }
        });

         return done(null, user);
      });
    }
));


passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
