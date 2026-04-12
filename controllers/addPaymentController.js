import {payments} from '../data/mongo.js';
import {users} from '../data/mongo.js';
import { ObjectId } from "mongodb";

async function addPayment(req, res){
    let name = req.body.name;
    let creatorId = req.user._id;
    let amount = req.body.amount;
    let participants = req.body.participants;
    let groupId = req.params.id;

    participants.forEach(async (participant)=>{
        let userExist = await users.findOne({username: participant}); 
        if(!userExist){
            return res.status(400).send("Invalid Input");
        }
    })

    try{
        await payments.insertOne({
            name: name,
            creator: creatorId,
            amount: amount,
            participants: participants,
            group: new ObjectId(groupId)
        })
        return res.status(200).send("Payment Added");
    }catch(err){
        return res.status(100);
    }
}

export default addPayment;