$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRS();
  // defaultLoginPage();
  getAllRecognitionReceived();
  // displayList();
  updateBeesReceived();
  // filter('RR');
  // logout();
});
var oPerson = JSON.parse(localStorage.getItem("currUser"));

function getName(){
  var username = oPerson.sender//remove 's from username
  return username;
};

function getAllRecognitionReceived(){
  var db = JSON.parse(localStorage.getItem("db"));//mock db call
  username = getName();
  //console.log(db)
  var receivedRecognition = [];
  for (var i = 0; i < db.length; i++) {
    //console.log(db[i].receiver);
    //console.log(i);
    if (db[i].receiver.toLowerCase() === username.toLowerCase()) {//when localstorage works replace var recognition with var localstorage
      receivedRecognition.push(db[i]);
      //console.log(receivedRecognition);
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
