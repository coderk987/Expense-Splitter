import { groups } from "../data/mongo.js";
import { users } from "../data/mongo.js";
import { ObjectId } from "mongodb";

async function addMember(req, res){
    const groupId = req.params.id;
    const memberName = req.body.username;
    const memberData = await users.findOne({username: memberName});
    const memberId = memberData._id;
    if(memberData){
        try{
            await groups.updateOne({_id: new ObjectId(groupId)}, {$addToSet: {members: memberId}});
            return res.status(200).send("Member Added");
        }catch(err){
            res.status(100).send(err.message);
        }
    }else{
        res.status(400).send("User does not Exist");
    }
}

export default addMember;