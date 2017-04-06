var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
// Use this to delete a restaurant:
  var deleteRestaurant = prompt("Which restaurant would you like to delete?");
 
	collection.remove(
				{name: deleteRestaurant});

// Use this to edit a restaurant:
	 //  var whichRestaurant = prompt("Which restaurant would you like to edit?");
	 //  var editName = prompt("What is the new name?");
	 //  var editStreet = prompt("What is the new street address?");
	 //  var editZipcode = prompt("What is the new zipcode?");
	 //  var editUrl = prompt("What is the new yelp ur?");
	 
		// collection.update(
		// 		  	{name: whichRestaurant},
		// 		  	{
		// 		  	name: editName,
		// 		  	address: {
		// 		  	street: editStreet,
		// 		  	zipcode: editZipcode
		// 		  	},
		// 		  	yelp: editUrl
		// 		  	});

//Use this to add a new restaurant:
	 //  var newRestaurant = prompt("Would you like to add a new restaurant?");
	 //  var name = prompt("What is the name of your restaurant?");
	 //  var street = prompt("What is the street address?");
	 //  var zipcode = prompt("What is the zipcode?");
	 //  var url = prompt("What is the yelp ur?");
	 
		// collection.insert(
		// 		  	{
		// 		  	name: name,
		// 		  	address: {
		// 		  	street: street,
		// 		  	zipcode: zipcode
		// 		  	},
		// 		  	yelp: url
		// 		  	});

//Use this to find all restaurants:		
	  // var searchRestaurant = prompt("Search Restaurants:");
	    		// collection.find({name: searchRestaurant}).forEach( function(doc){
	  		// 	console.log(doc);
	  		// });

});