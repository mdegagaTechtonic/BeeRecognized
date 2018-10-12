$(document).ready(function(init){
  // defaultUserProfilePage();
  // defaultLoadPageRR();
  // defaultLoginPage();
  // displayUserInfo();
  // getDateRange();
  getAllRecognitionSent();
  updateBeesSent();
  // displayList(arr);
  filter('RS');
});

// $("#filter").on("click", function(event) {
//   filter(event, arr);
// });
//
// function filter(event, arr) {
//   event.preventDefault();
//
// }
var oPerson = JSON.parse(localStorage.getItem("currUser"));

function getName(){
  var username = oPerson.sender//remove 's from username
  return username;
};

function getAllRecognitionSent(){
  // localStorage = localStorage.getItem("db");//mock db call
  var db = JSON.parse(localStorage.getItem("db"));
  username = getName();
  // console.log(username);
  var sentRecognition = [];
  for (var i = 0; i < db.length; i++) {
    // console.log(i);
    // console.log(db[i].sender);
    if (db[i].sender.toLowerCase() === username.toLowerCase()) {//when localstorage works replace var recognition with var localstorage
    sentRecognition.push(db[i]);
    }
  }
  // console.log(sentRecognition)
  displayList(sentRecognition, "RS");
  return sentRecognition;
};

function updateBeesSent(){
  var numberSent = getAllRecognitionSent().length;
  beeCount = "Total: " + numberSent;
  $(".total").attr("title","Total: " + numberSent);
  $(".total").append(beeCount);
};

$(".username").text(oPerson.sender);
