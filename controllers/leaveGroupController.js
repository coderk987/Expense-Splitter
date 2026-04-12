import { groups, users } from "../data/mongo.js";
import { ObjectId } from "mongodb";

async function leaveGroup(req, res){
    let userId = req.user._id;
    let groupId = new ObjectId(req.params.id);

    let userData = await users.findOne({_id: userId});
    let groupData = await groups.findOne({_id: groupId});

    if(userData && groupData){
        await groups.updateOne({_id: groupId}, {$pull: {members: userId}});
        return res.status(200);
    }else{
        return res.status(400);
    }
}

export default leaveGroup;