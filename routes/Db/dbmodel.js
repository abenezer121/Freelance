const mongoose = require('mongoose')
require('mongoose-double')(mongoose)
//add start date on projects
//add bets on projects
var Schema = mongoose.Schema;
var usersSchema = new mongoose.Schema({
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

})
var clientsSchema = new mongoose.Schema({

  name : String , //if company
  detail : String,
  place : String , //temporary if company
  user : {type : Schema.Types.ObjectId , ref : 'user'}
})
var freelanceSchema = new mongoose.Schema({

  workedon :
  [
    {
      project : {type: Schema.Types.ObjectId , ref: 'project' },
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
  chat :
  [
    {
      type: Schema.Types.ObjectId , ref: 'chat'
    }
  ],
  skill :
  [
    {
      type: Schema.Types.ObjectId , ref: 'subcategory'
    }
  ],
  user : {type : Schema.Types.ObjectId , ref : 'user'}
})

var categorySchema = new mongoose.Schema({
  name : {
            type: String,
            required: true,
            unique: true
        } ,
  subcategory :
  {
    type : Schema.Types.ObjectId , ref : 'subcategory'
  }
})
var subcategorySchema = new mongoose.Schema({
  name :
  [
    {
      category :
      {
        type : Schema.Types.ObjectId , ref : 'category'
      },
      name : String
    }
  ]
})

var inboxSchema = new mongoose.Schema({
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  from : {type : Schema.Types.ObjectId , refPath : 'people'},
  people : {
    type : String ,
    required : true ,
    enum : ['Clients' , 'freelance']
  },
  message : String,
} ,   { timestamps: { createdAt: 'created_at' }
})
var chatSchema = new mongoose.Schema({
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  from : {type : Schema.Types.ObjectId , refPath : 'people'},
  people : {
    type : String ,
    required : true ,
    enum : ['Clients' , 'freelance']
  } ,
  message : [{type : Schema.Types.ObjectId , ref : 'inbox'}]
})
// var workingon = new mongoose.Schema({}) add inside freelance as populate
var projectsSchema = new mongoose.Schema({
  name : String ,
  duration : { type: Date, default: Date.now },
  budget : String,
  img : String ,
  category : {type : Schema.Types.ObjectId , ref : 'category'},
  detail : String,
  status : String,
  skillneeded : {type : Schema.Types.ObjectId , ref : 'subcategory'},
  assignedto : {type : Schema.Types.ObjectId , ref : 'freelance'}
})

var inboxSchema = mongoose.model('inbox' , inboxSchema )
var clientsSchema = mongoose.model( 'Clients' , clientsSchema)
var usersSchema = mongoose.model('User' , usersSchema)
var freelanceSchema = mongoose.model('freelance' , freelanceSchema)
var categorySchema = mongoose.model('category' , categorySchema)
var chatSchema = mongoose.model('chat' , chatSchema)
var subcategorySchema = mongoose.model('subcategory' , subcategorySchema)
var projectsSchema = mongoose.model('project' , projectsSchema)

var model = {
  'inbox' : inboxSchema ,
  'Clients' : clientsSchema ,
  'User' : usersSchema ,
  'freelance' : freelanceSchema ,
  'category' : categorySchema ,
  'chat' : chatSchema ,
  'subcategory' : subcategorySchema ,
  'project' : projectsSchema
}

exports.model  = model;
