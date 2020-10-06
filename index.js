//natural-language-processing
//natural-language-processing-tensorflow
//nlp-sequence-models
//attention-models-in-nlp
//sequence-models-in-nlp


const express = require('express')
const session = require('express-session');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const user = require('./routes/user/user')
const chat = require('./routes/chat/chat')
const project = require('./routes/project/project')
const notification = require('./routes/Notification/notification')
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/Freelance',function(error){
  if(error) {console.log("error")}
})


app.use(bodyParser.urlencoded({extended :true}))
app.use(bodyParser.json())
// initialize passposrt and and session for persistent login sessions
app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: true,
    saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(user)
app.use(project)
app.use(chat)
app.use(notification)





// launch the app
app.listen(3030);
console.log("App running at localhost:3030");
