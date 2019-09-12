var friendsArr = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsArr);
    })

    app.post('/api/friends', function (req, res) {
        console.log(req.body)

        newFriendData = req.body;
        
        var scoresArr = parseInt(newFriendData.scores);

        friendsArr.push(newFriendData);

        for (var i = 0; i < newFriendData.length; i++) {
            scoresArr = newFriendData[i].scores;
            for (var i = 0; i < scoresArr.length; i++) {
                console.log(parseInt(scoresArr[i]));
            }
        }

        res.json(newFriendData);

    })
}