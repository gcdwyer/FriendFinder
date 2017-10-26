// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {

	    res.json(friends);

	});

	var userData = []

	app.post("/api/friends", function(req, res) {

		// Displays at terminal log
		var newFriend = req.body;
		console.log("==================NEW FRIEND========================");
		console.log(newFriend.name);
		console.log("==================NEW FRIEND========================");

		var bestMatch = {
			name: "",
			photoUrl: "",
			friendDiff: 100
		};

	    // loops through all friends
	    for (var i = 0; i < friends.length; i++) {

	    	var difference = 0;

	    	console.log("****************FRIENDS LIST**********************");
	    	console.log(friends[i]);
	    	console.log("****************FRIENDS LIST**********************");

	    	// loops through each objects score
	    	for (var j = 0; j < 10; j++) {

	    		difference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);

	    		console.log("Difference: " + difference);

	    	}

		    if (difference <= bestMatch.friendDiff) {

				bestMatch.name = friends[i].name;
				bestMatch.photoUrl = friends[i].photo;
				bestMatch.friendDiff = difference;

			}	
	    }

	    friends.push(newFriend);
	    res.json(bestMatch);

	    console.log("==================BEST MATCH===================");
	    console.log("Best Match: " + bestMatch.name);
	    console.log("Score Difference: " + bestMatch.friendDiff);
	    console.log("==================BEST MATCH===================");

	});
}