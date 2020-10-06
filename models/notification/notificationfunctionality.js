var notification = require('./notification')
var user = require('./../user/user')
//user id // populate userschema to find the notifications
exports.getnotification = (id) => {
        user.User.findOne({_id : userid}).then(function(err , result){
                if(err) { res.send ( { status : 101 , message : "db error" } ) }
                else{
                        //populate here
                }
        })
}



exports.setnotification = (userid , message) =>
{

        const notification = new notification.Notification();
        notification.to = userid;
        status = "unchecked";
        message = message;
        notification.save(function(err , res){
          if(err) { res.send( {status : 100 ,message : "Please  the"})}
          else { res.send( {status : 100 ,message : "sent"}) }
        })

}
