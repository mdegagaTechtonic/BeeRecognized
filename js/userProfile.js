// Function getRecentRecognition
// Db call for 5 most recent recognitions
  // Message
  // Username
  // Avatar
  // Date
// Calls displayList()

//set up Recognition prototype/object
//create array of 5 recognitions representing data from db Call
  //each object contains attributes including linked png
//create getRecentRecognition Function
//function takes in array of recognition objects
//calls filterList to dispay

function Recognition(message, username, avatar, date)
{
  this.message = message;
  this.username = username;
  this.avatar = avatar;
  this.date = date;
};

//test

// var recognition1 = new Recognition("great job turning in those tps reports on time", "Billy Bob", images/demoUser1.png, "October 1, 2018");

var recognitionArray = [
  {message: "blah", username: "blah", avatar: "demoUser1.png", date: "January 1, 2018"},
  {message: "blah", username: "blah", avatar: "demoUser1.png", date: "January 1, 2018"},
  {message: "blah", username: "blah", avatar: "demoUser1.png", date: "January 1, 2018"}
];
Recognition.prototype.getRecentRecognition = function(){
  // var recentRecognitionsArray = [recognition1, recognition2, recognition3, recognition4, recognition5];
};
