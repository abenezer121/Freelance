const project = require('./../../models/project/projectfunctionality')
const searchsort = require('./../../models/project/searchsort')

exports.createproject = (req , res) => {
        const {name , duration , budget , cathegory , detail , skillneeded} = req.body;
        if(!name || !duration || !budget || !cathegory || !detail || !skillneeded){ res.send({ status : 401 , message : "Please fill the boxes" }) }
        else { project.createproject(name , duration , budget , category , detail , skillneeded)}
        }


exports.updateproject = (req , res) => { }

exports.search = (req , res) => {searchsearch.search(type , data)}
//type search type // an array ["web" , "design" , "duedate"]  data //array
exports.sort = (req , res) => { searchsort.search(type , data)}
exports.listprojects = (req , res) => { res.send(project.viewproject(req.body.id)); }
