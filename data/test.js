const data = {
    "users": [
        {
            "id": 1,
            "name": "aaa",
            "email": "aaa@mail.com",
            "password": "shhaaa"
        },
        {
            "id": 2,
            "name": "bbb",
            "email": "bbb@mail.com",
            "password": "shhbbb"
        }
    ],
    "groups": [
        {
            "id": 1,
            "name": "Dinner",
            "adminId": 2,
            "members": [1,2]
        }
    ],
    "payments": [
        {
            "id": 1,
            "groupId": 1,
            "title": "Ice Cream",
            "creatorId":  1,
            "participants": [2],
            "amount": 30
        }
    ],
    "participants": [
        {
            "userId": 2,
            "paymentId": 1,
            "amount": 30,
            "status": false
        }
    ]
}

module.exports = data;