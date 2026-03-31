const USERID = 1;
const data = require("../data/test.js");

function getGroups(req, res){
    const response = [];
    data.groups.forEach((group) => {
        if(group.members.includes(USERID)) response.push(group);
    })
    return res.json(response);
}

module.exports = getGroups;