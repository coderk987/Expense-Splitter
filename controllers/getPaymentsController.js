const USERID = 2;
import {users} from "../data/mongo.js";

function getPayments(req, res){
    /*const GROUPID = req.params.id;
    const response = [];
    data.payments.forEach((pay)=>{
        if(GROUPID==pay.groupId && pay.participants.includes(USERID)) response.push(pay);
    })*/
    console.log(users);
    //return res.json(response);
}

//getPayments();

export default getPayments;