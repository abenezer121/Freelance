const mongoose = require('mongoose')
require('mongoose-double')(mongoose)

var Schema = mongoose.Schema;



var ChatSchema = new mongoose.Schema({
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  from : {type : Schema.Types.ObjectId , refPath : 'people'},
  message : [{to : {type : Schema.Types.ObjectId , refPath : 'people'} , from : {type : Schema.Types.ObjectId , refPath : 'people'} , message : String}],
  people : {
    type : String ,
    required : true ,
    enum : ['Client' , 'Freelancer']
  } ,
})

var Chat = mongoose.model('Chat' , ChatSchema);

var sc =
        {
          'Chat' : Chat,

        };
module.exports = sc;
