const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const DbModel = require('../Db/dbmodel')
//100 -200 database error

router.post('/loginfreelancer' , function(req , res){
  const {username , password , phone , email} = req.body;
  if(!username || !password || !phone || !email)
  {
      res.send
      (
        {
          status : 201,
          message : "error"
        }
      )
  }
  DbModel.Customer.find(
  { $or: [{ email: email }, { phone: phone }, { username: username }] },
  function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
    });



router.post('/logincustomer' , function(req , res){
  const {username , password , phone , email} = req.body;
  if(!username || !password || !phone || !email)
  {
      res.send
      (
        {
          status : 201,
          message : "error"
        }
      )

  }
  DbModel.Customer.find(
  { $or: [{ email: email }, { phone: phone }, { username: username }] },
  function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

module.exports = router;
