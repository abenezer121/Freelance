const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const DbModel = require('../Db/dbmodel')
//100 -200 database error



router.get('/getmessage' , function(req , res){
  
})

router.post('sendchat' , function(req , res){
  const {userid , to ,  message} = req.body;
  if(!message || !userid || !to)
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
    DbModel.chat.find(
      {
          $and : //check if the private chat schema already created
          [
            { $and : [ { to : to } , { from : userid } ] } ,
            { $and : [ { to : userid } , { from : to } ] } ,
           ]
      }, function( err, result)
      {
          if (err) {
            //create new chat
            const chat = new DbModel.chat();
            chat.to = to;
            chat.from = userid;
            chat.message = [{to : to , from : from , message : message}]
            chat.save(function(req , res){
              if(err)
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
          }
          else
          {
            //if(userid == result.userid){ // save the new message and update chat}
          }
  });
  }

})
module.exports = router;
