import {payments} from "../data/mongo.js";

async function getPayments(req, res){
    const groupId = req.params.id;
    const userId = req.user._id;

    try{
        const userPayments = await payments.find({
            $or: [
                {creator: userId},
                {participants: userId},
            ],
            group: groupId
        })
        res.status(200).json(userPayments);
    }catch(err){
        res.status(100);
    }
}

export default getPayments;