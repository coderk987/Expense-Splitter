const USERID = 2;
const data = require("../data/test.js");

function getPayments(req, res){
    const GROUPID = req.params.id;

    const response = [];
    data.payments.forEach((pay)=>{
        if(GROUPID==pay.groupId && pay.participants.includes(USERID)) response.push(pay);
    })

    return res.json(response);
}

module.exports = getPayments;