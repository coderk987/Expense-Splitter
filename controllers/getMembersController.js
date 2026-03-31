const USERID = 1;
const data = require("../data/test.js");

function getMembers(req, res){
    const GROUPID = req.params.id;

    let response=[];
    data.groups.find((group)=>{
        if(group.id==GROUPID){
            response = group.members;
            return true;
        }
    })

    res.json(response);
}

module.exports = getMembers;