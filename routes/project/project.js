const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const DbModel = require('../Db/dbmodel')
//100 -200 database error

router.post('/createproject' , function(req , res){
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
    const project = new DbModel.project();
    project.name = name;
    project.duration = duration;
    project.budget = budget;
    project.category = category;
    project.detail = detail;
    project.skillneeded = skillneeded;
    project.status = "unassigned";
    project.save(function(err , res){
      if(err)
      {
        res.send
        (
          {
            status : 101 ,
            message : "Dberror"
          }
        )
      }
      else
      {
        res.send
        (
          {
            status : 501 ,
            message : "sucess"
          }
        )
      }
    })
  }
})
module.exports = router;
