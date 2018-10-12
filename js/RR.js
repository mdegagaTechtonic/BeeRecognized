$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRS();
  // defaultLoginPage();
  getAllRecognitionReceived();
  // displayList();
  updateBeesReceived();
  filter('RR');
  // logout();
});
var oPerson = JSON.parse(localStorage.getItem("currUser"));

function getName(){
  var username = oPerson.sender
  return username;
};

function getAllRecognitionReceived(){
  var db = JSON.parse(localStorage.getItem("db"));//mock db call
  var username = getName();
  var receivedRecognition = [];
  for (var i = 0; i < db.length; i++) {
    //console.log(db[i].receiver);
    //console.log(i);
    if (db[i].receiver.toLowerCase() === username.toLowerCase()) {
      receivedRecognition.push(db[i]);
    }
  }
  displayList(receivedRecognition, "RR");
  return receivedRecognition;
};

function updateBeesReceived(){
  var numberReceived = getAllRecognitionReceived().length;
  beeCount = "Total: " + numberReceived;
  $(".total").attr("title","Total: " + numberReceived);
  $(".total").append(beeCount);
};


$(".username").text(oPerson.sender);
