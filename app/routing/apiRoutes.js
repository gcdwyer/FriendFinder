// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {

	    res.json(friends);

	});


	app.post("/api/friends", function(req, res) {

		// Displays at terminal log
		console.log(req.body);
	    console.log(req.body.name);

	    // console.log("friend 1 score: " + friends[0].scores[0]);

	    var difference = 0;

	    // loops through all friends
	    for (var i = 0; i < friends.length; i++) {

	    	// console.log(friends[i]);

	    	// loops through each objects score
	    	for (var j = 0; j < 10; j++) {

	    		// console.log(friends[i].scores[j]);

	    		// console.log(req.body);
	    		// console.log(req.body.score);
	    		// console.log(req.body.score[j]);

	    		// difference = Math.abs(friends[i].scores[j] - req.body.scores[j]);

	    		// console.log("Difference: " + difference);

	    	}



	    }

	});

}