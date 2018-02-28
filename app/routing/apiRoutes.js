var friendsData = require("../data/friends.js");
var path = require("path");
module.exports = function (app) {
  // API GET Requests

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
    console.log(friendsData);
  });

  // API POST Requests

  app.post("/api/friends", function (req, res) {
    //pseudo code
    var userInput = req.body;
    console.log(userInput);

    var userReponses = userInput.scores;
    console.log('userResponses = ' + userReponse);

    var matchName = "";
    var matchImage = "";
    var totalDifference = 10000;

    for (var i = 0; i < friendsData.length; i++) {
      var difference = 0;
      for (var j = 0; j < userResponses.length; j++) {
        difference += Math.abs(friendsData[i].scores[j] - userReponses[j]);
      };
    }

    if (friendsData.length < 20) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      friendsData.push(req.body);
      res.json(false);
    }
  });


  app.post("/api/clear", function () {
    // Empty out the arrays of data
    friendsData = [];
    console.log(friendsData);
  });
};






// app.get("/", function(){

// });

// app.get("/", function(){

// });