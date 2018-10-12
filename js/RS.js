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

function getName(event){
  var username = $('span.username').text().slice(0, -2);//remove 's from username
  return username;
};

function getAllRecognitionSent(){
  // localStorage = localStorage.getItem("db");//mock db call
  var db = JSON.parse(localStorage.getItem("db"));
  //username = getName();
  var sentRecognition = [];
  for (var i = 0; i < db.length; i++) {
    if (db[i].sender.toLowerCase() === username.toLowerCase()) {//when localstorage works replace var recognition with var localstorage
    sentRecognition.push(db[i]);
    }
  }
  displayList(sentRecognition, "RS");
  return sentRecognition;
};

function updateBeesSent(){
  var numberSent = getAllRecognitionSent().length;
  beeCount = "Total: " + numberSent;
  $(".total").attr("title","Total: " + numberSent);
  $(".total").append(beeCount);
};

var oPerson = JSON.parse(localStorage.getItem("currUser"));
$(".username").text(oPerson.sender);
