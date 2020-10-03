const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./routes/Db/dbmodel')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Freelance',function(error){
  if(error) {console.log("error")}
})

app.use(bodyParser.urlencoded({extended :true}))
app.use(bodyParser.json())

app.listen(3001 , () => console.log("lis"))
