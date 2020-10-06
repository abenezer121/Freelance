const mongoose = require('mongoose')
require('mongoose-double')(mongoose)

var Schema = mongoose.Schema;




var ProjectSchema = new mongoose.Schema({
  name : String ,
  duration : { type: Date, default: Date.now },
  budget : String,
  img : String ,
  category : {type : Schema.Types.ObjectId , ref : 'Category'},
  detail : String,
  status : String,
  skillneeded : {type : Schema.Types.ObjectId , ref : 'Category'},
  assignedto : {type : Schema.Types.ObjectId , ref : 'User'}
})

var Project = mongoose.model('Project' , ProjectSchema);

var sc =
        {
          'Project' : Project,
        };
module.exports = sc;
