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

function getName(event){
  var username = $('span.username').text().slice(0, -2);//remove 's from username
  return username;
};

function getAllRecognitionReceived(){
  var db = JSON.parse(localStorage.getItem("db"));//mock db call
  username = getName();
  var receivedRecognition = [];
  for (var i = 0; i < db.length; i++) {
    if (db[i].receiver.toLowerCase() === username.toLowerCase()) {//when localstorage works replace var recognition with var localstorage
      receivedRecognition.push(db[i]);
      console.log(receivedRecognition);
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
