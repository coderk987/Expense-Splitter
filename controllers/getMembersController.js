import { groups, users } from "../data/mongo.js";
import { ObjectId } from "mongodb";

async function getMembers(req, res){
    const groupId = req.params.id;
    const groupData = await groups.findOne({_id: new ObjectId(groupId)});
    console.log(groupData);
    const membersId = groupData.members;
    const groupMembers = await users.find({_id: {$in: membersId}}, { password: 0 }).toArray();

    return res.json(groupMembers);
}

export default getMembers;