const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./routes/Db/dbmodel')
const signup = require('./routes/user/signup')
const login = require('./routes/user/login')
const profile = require('./routes/user/profile')
const chat = require('./routes/chat/chat')
const project = require('./routes/project/project')
const updateproject = require('./routes/project/updateproject')
const notification = require('./routes/Notification/notification')



const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Freelance',function(error){
  if(error) {console.log("error")}
})

app.use(bodyParser.urlencoded({extended :true}))
app.use(bodyParser.json())
app.use(signup)
app.use(login)
app.use(chat)
app.use(project)
app.use(updateproject)
app.use(notification)

app.listen(3001 , () => console.log("lis"))



//todo
// add passport
// add jwt
// add session
//read about session and jwt
