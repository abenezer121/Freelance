const chatfunctionality = require('./../../models/chat/chatfunctionality')


exports.getmessage = (req , res) => {
        res.send(chatfunctionality.getmessage(req.body.id))
}

exports.sendchat = (req , res) => {
        const {userid , to ,  message} = req.body;
        if(!message) { res.send({status : 401, message : "Please fill the boxes"})}
        else { chatfunctionality.sendchat(to , from , message) }
}
