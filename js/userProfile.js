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

function getRecentRecognition(arr){
  var arr = [
    {avatar:"demoUser1.png", username:"Shambre SW", date:"1 day ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},
    {avatar:"demoUser1.png", username:"Erik H", date:"4 days ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},
    {avatar:"demoUser1.png", username:"Jason D", date:"2 weeks ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},
    {avatar:"demoUser1.png", username:"Shambre SW", date:"1 day ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."},
    {avatar:"demoUser1.png", username:"Shambre SW", date:"1 day ago", message:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}
  ];
  displayList(arr);
};
