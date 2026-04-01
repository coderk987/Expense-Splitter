import { groups } from "../data/mongo.js";

async function getGroups(req, res){
    const groupsOfUser = await groups.find({members: req.user._id}).toArray();
    console.log(req.user);
    return res.status(200).json(groupsOfUser);
}

export default getGroups;