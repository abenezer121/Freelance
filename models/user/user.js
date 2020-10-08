const mongoose = require('mongoose')
require('mongoose-double')(mongoose)



var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
  email : {
            type: String,
            required: true,
            unique: true
        },
  password : 'String',
  phone : {
            type: String,
            required: true,
            unique: true
        },
  username : {
            type: String,
            required: true,
            unique: true
        },
  city : String,
  LastName : String,
  FirstName : String,
  type : String, //Clients || Freelancer
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  people : {
    type : String ,
    enum : ['Client' , 'Freelancer']
  } ,
  notification : [{type : Schema.Types.ObjectId , refPath : 'Notification'}],
  chat : // useru message yaregachew sewoch
  [
    {
      type: Schema.Types.ObjectId , ref: 'Chat'
    }
  ]

})
var ClientSchema = new mongoose.Schema({

  Cname : String , //if company
  detail : String,
  address : String , //temporary if company
  user : {type : Schema.Types.ObjectId , ref : 'User'},


})
var FreelancerSchema = new mongoose.Schema({

  workedon :
  [
    {
      project : {type: Schema.Types.ObjectId , ref: 'Project' },
      startdate : { type: Date, default: Date.now }
    }
  ],
  workingon :
  [
    {
      type: Schema.Types.ObjectId , ref: 'Project'
    },
  ],

  rating : { type: Schema.Types.Double },

  skill :
  [
    {
      type: Schema.Types.ObjectId , ref: 'SubCategory'
    }
  ],


})



var User = mongoose.model('User' , UserSchema);
var Freelancer = mongoose.model('Freelancer' , FreelancerSchema);
var Client = mongoose.model('Client' , ClientSchema);

var sc =
        {
          'User' : User ,
          'Freelancer' : Freelancer,
          'Client' : Client,
        };
module.exports = sc;
