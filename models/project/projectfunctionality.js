const db = require('./project')


exports.createaproject = (name , duration , budget , category , detail , skillneeded) => {
        const project = new DbModel.project();
        project.name = name;
        project.duration = duration;
        project.budget = budget;
        project.category = category;
        project.detail = detail;
        project.skillneeded = skillneeded;
        project.status = "unassigned";
        project.save(function(err , res){
          if(err) { res.send ({ status : 101 , message : "Dberror" }) }
          else { res.send ( { status : 501 , message : "sucess" } ) }
        })
}
exports.updateproject = () => {}
//exports.deleteproject = () => {}

exports.viewproject = (id) =>
{
        db.Project.findOne({_id : id} , function(err , res){
                if (err) { res.status(100).send("dberror");}
                else { return res;}
        })
}
