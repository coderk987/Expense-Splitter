const USERID = 1;

function getMembers(req, res){
    const GROUPID = req.params.id;

    let response=[];
    data.groups.find((group)=>{
        if(group.id==GROUPID){
            response = group.members;
            return true;
        }
    })

    res.json(response);
}

export default getMembers;