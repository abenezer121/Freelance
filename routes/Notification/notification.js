const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const DbModel = require('../Db/dbmodel')
//100 -200 database error

//notification clicked as read delete from db


router.post('/getnotification' , function(req , res){
  const {userid} = req.body;
  if(!message || !userid)
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
  DbModel.User.findOne({_id : userid}).then(function(err , result){
    if(err)
    {
      res.send
      (
        {
          status : 101 ,
          message : "db error"
        }
      )
    }
    else
    {

    }
  })
}

})


router.post('setnotification' , function(req , res){
  const {userid , message} = req.body;
  if(!message || !userid)
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
    const notification = new DbModel.Notification();
    notification.to = userid;
    status = "unchecked";
    message = message;
    notification.save(function(err , res){
      if(err)
      {
        res.send
        (
          {
            status : 100 ,
            message : "Please  the"
          }
        )
      }
      else
      {

      }
    })
  }

})
module.exports = router;
