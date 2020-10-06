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
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  people : {
    type : String ,
    required : true ,
    enum : ['Clients' , 'Freelancers']
  } ,
  notification : [{type : Schema.Types.ObjectId , refPath : 'Notification'}],
  chat : // useru message yaregachew sewoch
  [
    {
      type: Schema.Types.ObjectId , ref: 'Chats'
    }
  ]

})
var ClientSchema = new mongoose.Schema({

  Cname : String , //if company
  detail : String,
  address : String , //temporary if company
  user : {type : Schema.Types.ObjectId , ref : 'Users'},

})
var FreelancerSchema = new mongoose.Schema({

  workedon :
  [
    {
      project : {type: Schema.Types.ObjectId , ref: 'Projects' },
      startdate : { type: Date, default: Date.now }
    }
  ],
  workingon :
  [
    {
      type: Schema.Types.ObjectId , ref: 'project'
    },
  ],

  rating : { type: Schema.Types.Double },

  skill :
  [
    {
      type: Schema.Types.ObjectId , ref: 'Subcategory'
    }
  ],
  user : {type : Schema.Types.ObjectId , ref : 'Users'},

})


var CategorySchema = new mongoose.Schema({
  name : {
            type: String,
            required: true,
            unique: true
        } ,
  subcategory :
  {
    type : Schema.Types.ObjectId , ref : 'Subcategory'
  }
})
var SubCategorySchema = new mongoose.Schema({
  name :
  [
    {
      category :
      {
        type : Schema.Types.ObjectId , ref : 'Category'
      },
      name : String
    }
  ]
})


var ProjectSchema = new mongoose.Schema({
  name : String ,
  duration : { type: Date, default: Date.now },
  budget : String,
  img : String ,
  category : {type : Schema.Types.ObjectId , ref : 'category'},
  detail : String,
  status : String,
  skillneeded : {type : Schema.Types.ObjectId , ref : 'Subcategory'},
  assignedto : {type : Schema.Types.ObjectId , ref : 'Freelancers'}
})


var NotificationSchema = new mongoose.Schema({
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  people : {
    type : String ,
    required : true ,
    enum : ['Clients' , 'Freelancers']
  } ,
  status : String ,
  message :String
})




var ChatSchema = new mongoose.Schema({
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  from : {type : Schema.Types.ObjectId , refPath : 'people'},
  message : [{to : {type : Schema.Types.ObjectId , refPath : 'people'} , from : {type : Schema.Types.ObjectId , refPath : 'people'} , message : String}],
  people : {
    type : String ,
    required : true ,
    enum : ['Clients' , 'Freelancers']
  } ,
})

var User = mongoose.model('User' , UserSchema);
var Freelancer = mongoose.model('Freelancer' , FreelancerSchema);
var Client = mongoose.model('Client' , ClientSchema);
var Category = mongoose.model('Category' , CategorySchema);
var Project = mongoose.model('Project' , ProjectSchema);
var Notification = mongoose.model('Notification' , NotificationSchema);
var Chat = mongoose.model('Chat' , ChatSchema);
var SubCategory = mongoose.model('SubCategory' , SubCategorySchema);

var sc =
        {
          'User' : User ,
          'Freelancer' : Freelancer,
          'Client' : Client,
          'Category' : Category,
          'Project' : Project,
          'Notification' : Notification,
          'Chat' : Chat,
          'SubCategory' : SubCategory,
        };
module.exports = sc;




// //add start date on projects
// //add bets on projects


//
//

//
//
// var Clients = mongoose.model( 'Clients' , ClientsSchema)
// var Users= mongoose.model('User' , UsersSchema)
// var Freelancers = mongoose.model('freelance' , FreelancersSchema)
// var Category = mongoose.model('category' , CategorySchema)
// var Chat = mongoose.model('chat' , ChatSchema)
// var Subcategory = mongoose.model('subcategory' , SubcategorySchema)
// var Projects = mongoose.model('project' , ProjectsSchema)
// var Notification = mongoose.model('Notification' , NotificationSchema)
// var model = {
//   'Clients' : Clients ,
//   'User' : Users ,
//   'Freelancers' : Freelancers ,
//   'Category' : Category ,
//   'Chat' : Chat ,
//   'Subcategory' : Subcategory ,
//   'Projects' : Projects ,
//   'Notification' : Notification
// }
//
// exports.model  = model;
