const mongoose = require('mongoose')
require('mongoose-double')(mongoose)

var Schema = mongoose.Schema;



var NotificationSchema = new mongoose.Schema({
  to : {type : Schema.Types.ObjectId , refPath : 'people'},
  people : {
    type : String ,
    required : true ,
    enum : ['Client' , 'Freelancer']
  } ,
  status : String ,
  message :String
})

var Notification = mongoose.model('Notification' , NotificationSchema);

var sc =
        {
          'Notification' : Notification,
        };
module.exports = sc;
