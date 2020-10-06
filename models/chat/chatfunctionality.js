const db = require('./chat')


exports.sendchat = (to , from , message) => {
        db.chat.find({ $and : [ { $and : [ { to : to } , { from : userid } ] } , { $and : [ { to : userid } , { from : to } ] } , ] }, function( err, result) {
           if (err)  //create new chat
           {
                const chat = new db.chat();
                chat.to = to;
                chat.from = userid;
                chat.message = [{to : to , from : from , message : message}]
                chat.save(function(req , res){
                  if(err) { res.send ( { status : 401 , message : "db error" } ) }
                  else { res.send({ status : 401 , message : "chat saved" }) }
                })
              }
              else
              {
                if(userid == result.userid) { addtochat(result.id , to ,  from , message )}

              }
        });
}


exports.getmessage = (id) => { //id of the other person
        db.findOne({_id : id} , function(req , result) {
                if(err) { res.send ( { status : 100 , message : "db error"})}
                else {return res}
        })
}

exports.addtochat = (id , to ,  from , message ) => {
db.findByIdAndUpdate.update( { "_id": id} , { "$push": { "message": {to : to , from : from , message : message}  } }, function (err, raw) {
       if (err) { res.send ( { status : 100 , message : "db error"})}
       else { res.send ( { status : 100 , message : "new chat"})}
   }
);
}
