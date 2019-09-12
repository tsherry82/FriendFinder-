var friendsArr = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsArr);
    })

    app.post('/api/friends', function (req, res) {
        console.log(req.body)

        newFriendData = req.body;
        

        friendsArr.push(newFriendData);

        res.json(newFriendData);

    })
}