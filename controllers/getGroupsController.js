import { groups } from "../data/mongo.js";

function getGroups(req, res){
    const response = [];
    data.groups.forEach((group) => {
        if(group.members.includes(USERID)) response.push(group);
    })
    return res.json(response);
}

export default getGroups;