
const notificationfunctionality = require('./../../models/notification/notificationfunctionality')

exports.getnotification = (req , res) => {
        const {userid} = req.body;
        if(!message || !userid) { res.send ( { status : 401 , message : "Please fill the boxes" } )}
        else { res.send(notificationfunctionality.getnotification)}
}

exports.setnotification = (req , res) => {
        const {userid , message} = req.body;
        if(!message || !userid) { res.send ( { status : 401 , message : "Please fill the boxes" })}
        else { notificationfunctionality.setnotification(userid , message)}
}
