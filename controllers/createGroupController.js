import { groups } from "../data/mongo.js";

async function createGroup(req, res) {
    const groupName = req.body.name;
    const groupAdmin = req.user._id;
    try{
        await groups.insertOne({
            name: groupName,
            admin: groupAdmin,
            members: [groupAdmin]
        });
        return res.status(200).send("Group Created");
    }catch(err){
        return res.status(100).send("Couldnt Create Group");
    }
    
}

export default createGroup;