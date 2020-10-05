const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const DbModel = require('../Db/dbmodel')
//100 -200 database error

router.post('/registerfreelance' , function(req , res) {
    //skill is json array
    const {email , password , phone , username , city , LastName , FirstName , skill} = req.body;

    if (!email || !password || !phone || !username || !city || !LastName || !FirstName)
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
        if(!skill)
        {
          skill = [];
        }
        //save in the general user schema
        const User = new DbModel.User();
        User.email = email;
        User.phone = phone;
        User.username = username;
        User.city = city;
        User.LastName = LastName;
        User.FirstName = FirstName;

        //hash the password before storin
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
                //save here
                User.password = hash;
                User.save(function(err,result)
                {
                  if(err){
                  res.send
                  (
                    {
                      status : 100 ,
                      message : "Db error"
                    }
                  )
                 }
                 else
                 {
                        //get the id to populate and save the freelancer
                        const Freelancer = new DbModel.freelance();
                        Freelancer.user = result._id;
                        Freelancer.skill = skill;
                        Freelancer.workingon = [];
                        Freelance.workedon = [];
                        Freelance.chat = [];
                        Freelance.rating = 0.0;
                        Freelance.save(function(err , res){
                          if(err)
                          {
                            res.send
                            (
                              {
                                status : 101 ,
                                message : "Db error"
                              }
                            )
                          }
                          else
                          {
                            res.send
                            (
                              {
                                status : 500 ,
                                message : "registered"
                              }
                            )
                          }
                        })
                  }
                  })
      });

  });
    }



})

router.post('/registercustomer' , function(req , res){
  const {email , password , phone , username , city , LastName , FirstName , Cname , detail , address} = req.body;
  if (!email || !password || !phone || !username || !city || !LastName || !FirstName)
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
    const User = new DbModel.User();
    User.email = email;
    User.phone = phone;
    User.username = username;
    User.city = city;
    User.LastName = LastName;
    User.FirstName = FirstName;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
            //save here
            User.password = hash;
            User.save(function(err,result)
            {
              if(err)
              {
                    res.send
                    (
                      {
                        status : 100 ,
                        message : "Db error"
                      }
                    )
               }
             else
             {
               const customer = new DbModel.Clients();
               customer.Cname = Cname;
               customer.detail = detail;
               customer.address = address;
               customer.user = result._id;
               customer.save(function(err , result){
                   if(err)
                   {
                     res.send
                     (
                       {
                         status : 100 ,
                         message : "Db error"
                       }
                     )
                   }
                   else
                   {
                     res.send
                     (
                       {
                         status : 500 ,
                         message : "registered"
                       }
                     )
                   }
               })
             }
           })

          })
        })
  }
})

module.exports = router;
