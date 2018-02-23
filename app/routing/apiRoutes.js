var friendsData = require("../data/friends.js");
var path = require("path");
module.exports = function(app) {
    // API GET Requests
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });

    // API POST Requests
    
    app.post("/api/friends", function(req, res) {
      if (friendsData.length < 20) {
        tableData.push(req.body);
        res.json(true);
      }
      else {
        friendsData.push(req.body);
        res.json(false);
      }
    });
  
  
    app.post("/api/clear", function() {
      // Empty out the arrays of data
      friendsData = [];  
      console.log(friendsData);
    });
  };
  





// app.get("/", function(){

// });

// app.get("/", function(){

// });