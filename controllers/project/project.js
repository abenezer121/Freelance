const project = require('./../../models/project/projectfunctionality')

exports.createproject = (req , res) => {
        const {name , duration , budget , cathegory , detail , skillneeded} = req.body;
        if(!name || !duration || !budget || !cathegory || !detail || !skillneeded){ res.send({ status : 401 , message : "Please fill the boxes" }) }
        else { project.createproject(name , duration , budget , category , detail , skillneeded)}
        }


exports.updateproject = (req , res) => { }

exports.listprojects = (req , res) => { res.send(project.viewproject(req.body.id)); }
