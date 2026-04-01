import { groups } from "../data/mongo.js";

async function getMembers(req, res){
    const groupId = req.params.id;
    const membersId = await groups.findOne({_id: groupId}).members;
    const groupMembers = await groups.find({_id: {$in: membersId}}, { password: 0 }).toArray();

    return res.json(groupMembers);
}

export default getMembers;