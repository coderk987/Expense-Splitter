import {groups} from "../data/mongo.js";

async function deleteGroup(req, res){
    const userId = req.user._id;
    const groupId = req.params.id;

    const groupData = await groups.findOne({_id: groupId});
    if(userId == groupData.admin){
        await groups.deleteOne({_id: groupId});
        return res.status(200).send("Group Deleted");
    }else{
        return res.status(400).send("Forbidden");
    }
}

export default deleteGroup;