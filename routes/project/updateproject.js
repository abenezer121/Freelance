const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const DbModel = require('../Db/dbmodel')
//100 -200 database error

router.post('/updateproject' , function(req , res){
  const {name , duration , budget , cathegory , detail , skillneeded} = req.body;
  if(!name || !duration || !budget || !cathegory || !detail || !skillneeded)
  {
    res.send
    (
      {
        status : 401 ,
        message : "Please fill the boxes"
      }
    )
  }
  else
  {

  }
})
module.exports = router;
