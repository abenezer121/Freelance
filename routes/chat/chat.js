//add passport auth on get and post
const express = require('express')
var router  = express.Router();
const bcrypt = require('bcrypt');
const chat = require('./../../controllers/chat/chat')
//100 -200 database error



router.post('/getmessage' , chat.getmessage )
//router.get('/getmessage' , chat.getmessage )
router.post('sendchat' , chat.sendchat)
//router.get('sendchat' , chat.sendchat)

module.exports = router;
